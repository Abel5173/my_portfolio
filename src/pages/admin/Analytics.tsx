
import React, { useEffect, useState } from 'react';
import { getVisits, getStats, Visit } from '../../lib/analytics';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { cn } from '../../lib/utils';
import LinkedInInsights from '../../app/admin/analytics/linkedin';
import HeatmapOverlay from '../../app/admin/analytics/heatmap';
import IntentPredictions from '../../app/admin/analytics/intent';

// Vite exposes env variables only via import.meta.env, not process.env
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS;

const Analytics = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [visits, setVisits] = useState<Visit[]>([]);
    const [stats, setStats] = useState({ totalVisitors: 0 });
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASS) {
            setIsAuthenticated(true);
            fetchData();
        } else {
            alert('Incorrect password');
        }
    };

    const fetchData = async () => {
        setLoading(true);
        const visitsData = await getVisits();
        const statsData = await getStats();
        setVisits(visitsData);
        setStats(statsData);
        setLoading(false);
    };

    useEffect(() => {
        // Check if already authenticated (optional: persist session)
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-neutral-lightest dark:bg-neutral-black">
                <form onSubmit={handleLogin} className="p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-neutral-dark dark:text-neutral-light">Admin Login</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full p-2 mb-4 border rounded dark:bg-neutral-medium dark:text-white"
                    />
                    <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-primary-dark">
                        Login
                    </button>
                </form>
            </div>
        );
    }

    // Process data for charts
    const sourceData = visits.reduce((acc: any, visit) => {
        const source = visit.referrer || 'Direct';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
    }, {});

    const sourceChartData = Object.keys(sourceData).map(key => ({ name: key, value: sourceData[key] }));

    const countryData = visits.reduce((acc: any, visit) => {
        const country = visit.country || 'Unknown';
        acc[country] = (acc[country] || 0) + 1;
        return acc;
    }, {});

    const countryChartData = Object.keys(countryData).map(key => ({ name: key, value: countryData[key] }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <div className="p-8 min-h-screen bg-neutral-lightest dark:bg-neutral-black text-neutral-dark dark:text-neutral-light">
            <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white dark:bg-neutral-dark rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Total Visitors</h3>
                    <p className="text-4xl font-bold">{stats.totalVisitors}</p>
                </div>
                {/* Add more summary cards here */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-white dark:bg-neutral-dark rounded-lg shadow h-80">
                    <h3 className="text-lg font-semibold mb-4">Visitors by Source</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={sourceChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {sourceChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-dark rounded-lg shadow h-80">
                    <h3 className="text-lg font-semibold mb-4">Visitors by Country</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={countryChartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <LinkedInInsights />
                <IntentPredictions />
            </div>

            <div className="mb-8">
                <HeatmapOverlay />
            </div>

            <div className="bg-white dark:bg-neutral-dark rounded-lg shadow overflow-hidden">
                <h3 className="text-lg font-semibold p-6 border-b dark:border-neutral-medium">Recent Visitors</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-neutral-light dark:bg-neutral-medium">
                            <tr>
                                <th className="p-4">Time</th>
                                <th className="p-4">Source</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">Device</th>
                                <th className="p-4">Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visits.map((visit) => (
                                <tr key={visit.id} className="border-b dark:border-neutral-medium hover:bg-neutral-lightest dark:hover:bg-neutral-medium/50">
                                    <td className="p-4">{new Date(visit.timestamp).toLocaleString()}</td>
                                    <td className="p-4">{visit.referrer}</td>
                                    <td className="p-4">{visit.country}</td>
                                    <td className="p-4">{visit.device}</td>
                                    <td className="p-4">{visit.page}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
