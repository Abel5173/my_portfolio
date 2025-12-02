import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../../lib/supabase';

interface HeatmapEvent {
    x: number;
    y: number;
    page?: string;
}

const HeatmapOverlay: React.FC = () => {
    const [events, setEvents] = useState<HeatmapEvent[]>([]);
    const [page, setPage] = useState('/');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from('heatmap_events')
                .select('x, y')
                .eq('page', page)
                .limit(1000); // Limit for performance

            if (error) {
                console.error('Error fetching heatmap events:', error);
            } else if (data) {
                setEvents(data);
            }
        };

        fetchEvents();
    }, [page]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && events.length > 0) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'rgba(255, 0, 0, 0.1)'; // Semi-transparent red
                events.forEach((e) => {
                    ctx.beginPath();
                    ctx.arc(e.x, e.y, 10, 0, 2 * Math.PI);
                    ctx.fill();
                });
            }
        }
    }, [events]);

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Heatmap Overlay</h2>
            <div className="mb-4">
                <label className="mr-2">Page:</label>
                <input
                    type="text"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                    className="border p-1 rounded"
                />
            </div>
            <div className="relative border border-gray-300" style={{ height: '500px', overflow: 'auto' }}>
                {/* Placeholder for actual page content background would go here */}
                <p className="absolute top-2 left-2 text-gray-400 text-sm">Canvas represents viewport clicks</p>
                <canvas
                    ref={canvasRef}
                    width={1200}
                    height={800}
                    className="absolute top-0 left-0"
                />
            </div>
        </div>
    );
};

export default HeatmapOverlay;
