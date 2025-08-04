-- Enable essential extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Core tables for Nuxt application
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    wp_legacy_id INTEGER,      -- Original WordPress ID
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User accounts table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

-- Indexes for performance
CREATE INDEX idx_posts_legacy_id ON posts(wp_legacy_id);