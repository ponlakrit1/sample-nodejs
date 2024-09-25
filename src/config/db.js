const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres.heolgpycjvbhllqpbhuu',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    database: 'postgres',
    password: 'CoEhs8tZ2FogCgYO',
    port: 6543,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = pool;
