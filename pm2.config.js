module.exports = {
  apps: [
    {
      name: 'allocator-dashboard',
      script: 'npm',
      args: 'start',
      cwd: './Dashboard',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET
      }
    },
    {
      name: 'allocator-landing',
      script: 'npm',
      args: 'start',
      cwd: './Landing',
      env: {
        PORT: 3001,
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET
      }
    }
  ]
}