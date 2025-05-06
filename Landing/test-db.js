const { Pool } = require('pg');
console.log('Testing database connection...');

// Method 1: Try direct parameters
try {
  const pool1 = new Pool({
    user: 'allocator_user',
    host: 'localhost',
    database: 'allocator_db',
    password: '',  // Empty string explicitly
    port: 5432,
  });
  
  pool1.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Method 1 error:', err.message);
    } else {
      console.log('Method 1 success:', res.rows[0]);
      process.exit(0); // Exit if successful
    }
  });
} catch (e) {
  console.error('Method 1 connection error:', e);
}

// Method 2: Try with null password
setTimeout(() => {
  try {
    const pool2 = new Pool({
      user: 'allocator_user',
      host: 'localhost',
      database: 'allocator_db',
      password: null,  // Null instead of empty string
      port: 5432,
    });
    
    pool2.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.error('Method 2 error:', err.message);
      } else {
        console.log('Method 2 success:', res.rows[0]);
        process.exit(0);
      }
    });
  } catch (e) {
    console.error('Method 2 connection error:', e);
  }
}, 2000);

// Method 3: Try with connection string that has no password
setTimeout(() => {
  try {
    const pool3 = new Pool({
      connectionString: 'postgresql://allocator_user@localhost:5432/allocator_db'
    });
    
    pool3.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.error('Method 3 error:', err.message);
      } else {
        console.log('Method 3 success:', res.rows[0]);
        process.exit(0);
      }
    });
  } catch (e) {
    console.error('Method 3 connection error:', e);
  }
}, 4000);

// Method 4: Try with trust authentication explicitly
setTimeout(() => {
  try {
    const pool4 = new Pool({
      user: 'allocator_user',
      host: 'localhost',
      database: 'allocator_db',
      port: 5432,
      ssl: false
    });
    
    pool4.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.error('Method 4 error:', err.message);
      } else {
        console.log('Method 4 success:', res.rows[0]);
        process.exit(0);
      }
    });
  } catch (e) {
    console.error('Method 4 connection error:', e);
  }
}, 6000);