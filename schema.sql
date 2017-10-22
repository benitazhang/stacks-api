CREATE DATABASE stacks;

\c stacks;

CREATE TABLE IF NOT EXISTS account (
	id SERIAL PRIMARY KEY, 
	first_name VARCHAR(40), 
	last_name VARCHAR(40), 
	email VARCHAR(254), 
	facebook_id BIGINT, 
	created_at TIMESTAMP WITH TIME ZONE, 
	picture VARCHAR(500)
);


CREATE TABLE IF NOT EXISTS stock_price (
	id SERIAL PRIMARY KEY, 
	ticker VARCHAR(4),
	closing_price DECIMAL(6,2),
	current_price DECIMAL(6,2),
	last_updated TIMESTAMP WITH TIME ZONE
);


