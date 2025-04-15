import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req) {
  const { risk, holdings } = await req.json();
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const user = await client.query(`INSERT INTO users (email) VALUES ($1) RETURNING id`, ['demo@allocator.app']);
    const portfolio = await client.query(
      `INSERT INTO portfolios (user_id, risk_profile) VALUES ($1, $2) RETURNING id`,
      [user.rows[0].id, risk]
    );

    for (let h of holdings) {
      await client.query(
        `INSERT INTO portfolio_assets (portfolio_id, asset, percentage) VALUES ($1, $2, $3)`,
        [portfolio.rows[0].id, h.asset, h.percentage]
      );
    }

    await client.query('COMMIT');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    await client.query('ROLLBACK');
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  } finally {
    client.release();
  }
}
