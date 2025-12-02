import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';

interface IntentData {
    visitor_intent: string;
    count: number;
}

const IntentPredictions: React.FC = () => {
    const [intents, setIntents] = useState<IntentData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIntents = async () => {
            const { data, error } = await supabase
                .from('visits')
                .select('visitor_intent');

            if (error) {
                console.error('Error fetching intents:', error);
            } else if (data) {
                const counts: Record<string, number> = {};
                data.forEach((visit: any) => {
                    const intent = visit.visitor_intent || 'Unknown';
                    counts[intent] = (counts[intent] || 0) + 1;
                });

                const intentList = Object.entries(counts).map(([name, count]) => ({
                    visitor_intent: name,
                    count,
                })).sort((a, b) => b.count - a.count);

                setIntents(intentList);
            }
            setLoading(false);
        };

        fetchIntents();
    }, []);

    if (loading) return <div>Loading Intent Predictions...</div>;

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Visitor Intent Predictions</h2>
            <div className="flex flex-wrap gap-4">
                {intents.map((item) => (
                    <div key={item.visitor_intent} className="p-4 border rounded text-center min-w-[150px]">
                        <div className="text-2xl font-bold">{item.count}</div>
                        <div className="text-gray-600">{item.visitor_intent}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntentPredictions;
