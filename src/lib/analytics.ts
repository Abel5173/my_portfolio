
import { supabase } from './supabase';

export interface Visit {
    id: string;
    ipaddress: string;
    fingerprint: string;
    referrer: string;
    country: string;
    city: string;
    device: string;
    browser: string;
    page: string;
    timestamp: string;
}

export const getVisits = async (): Promise<Visit[]> => {
    const { data, error } = await supabase
        .from('visits')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(100);

    if (error) {
        console.error('Error fetching visits:', error);
        return [];
    }

    return data as Visit[];
};

export const getStats = async () => {
    const { count: totalVisitors, error: countError } = await supabase
        .from('visits')
        .select('*', { count: 'exact', head: true });

    if (countError) {
        console.error('Error fetching total visitors:', countError);
    }

    // For more complex stats, we might need to process data client-side or add more specific queries
    // Since Supabase JS client doesn't support complex aggregations easily without RPC,
    // we'll fetch recent data and aggregate client-side for the dashboard for now.

    return {
        totalVisitors: totalVisitors || 0,
    };
};
