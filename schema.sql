CREATE DATABASE stacks;

\c stacks;

CREATE TABLE IF NOT EXISTS stock_price (
	id SERIAL PRIMARY KEY, 
	ticker VARCHAR(4),
	closing_price DECIMAL(6,2),
	current_price DECIMAL(6,2),
	last_updated TIMESTAMP WITH TIME ZONE
);


