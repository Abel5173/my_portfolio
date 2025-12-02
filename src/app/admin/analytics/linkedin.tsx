import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';

interface CampaignData {
    utm_campaign: string;
    count: number;
}

const LinkedInInsights: React.FC = () => {
    const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCampaigns = async () => {
            // Aggregate campaigns (simulated aggregation since Supabase client doesn't support group by easily without RPC or view)
            // For now, fetching all and aggregating client-side for simplicity, or use a view if created.
            // We'll fetch visits with utm_source='linkedin'
            const { data, error } = await supabase
                .from('visits')
                .select('utm_campaign')
                .eq('utm_source', 'linkedin');

            if (error) {
                console.error('Error fetching LinkedIn campaigns:', error);
            } else if (data) {
                const counts: Record<string, number> = {};
                data.forEach((visit: any) => {
                    const campaign = visit.utm_campaign || 'Unknown';
                    counts[campaign] = (counts[campaign] || 0) + 1;
                });

                const campaignList = Object.entries(counts).map(([name, count]) => ({
                    utm_campaign: name,
                    count,
                })).sort((a, b) => b.count - a.count);

                setCampaigns(campaignList);
            }
            setLoading(false);
        };

        fetchCampaigns();
    }, []);

    if (loading) return <div>Loading LinkedIn Insights...</div>;

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">LinkedIn Campaign Insights</h2>
            {campaigns.length === 0 ? (
                <p>No LinkedIn traffic detected yet.</p>
            ) : (
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="border-b p-2">Campaign</th>
                            <th className="border-b p-2">Visits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((c) => (
                            <tr key={c.utm_campaign}>
                                <td className="border-b p-2">{c.utm_campaign}</td>
                                <td className="border-b p-2">{c.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default LinkedInInsights;
