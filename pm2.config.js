module.exports = {
  apps: [
    {
      name: 'allocator',
      script: 'npm',
      args: 'start',
      cwd: './Dashboard',
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    },
    {
      name: 'landing',
      script: 'npm',
      args: 'start',
      cwd: './Landing',
      env: {
        PORT: 3001,
        NODE_ENV: 'production'
      }
    }
  ]
}
