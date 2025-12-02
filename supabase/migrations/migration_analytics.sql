-- Add new columns to visits table for UTM tracking, Scoring, and ML Intent
ALTER TABLE visits
ADD COLUMN IF NOT EXISTS utm_source text,
ADD COLUMN IF NOT EXISTS utm_medium text,
ADD COLUMN IF NOT EXISTS utm_campaign text,
ADD COLUMN IF NOT EXISTS utm_content text,
ADD COLUMN IF NOT EXISTS utm_term text,
ADD COLUMN IF NOT EXISTS recruiter_score int DEFAULT 0,
ADD COLUMN IF NOT EXISTS visitor_intent text;

-- Create heatmap_events table
CREATE TABLE IF NOT EXISTS heatmap_events (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    page text NOT NULL,
    x int NOT NULL,
    y int NOT NULL,
    scroll_depth int NOT NULL,
    timestamp timestamptz DEFAULT now()
);

-- Create index for faster querying on heatmap_events
CREATE INDEX IF NOT EXISTS idx_heatmap_page ON heatmap_events(page);
CREATE INDEX IF NOT EXISTS idx_heatmap_timestamp ON heatmap_events(timestamp);

-- Create index for faster querying on visits for analytics
CREATE INDEX IF NOT EXISTS idx_visits_utm_source ON visits(utm_source);
CREATE INDEX IF NOT EXISTS idx_visits_recruiter_score ON visits(recruiter_score);
