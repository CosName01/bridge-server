const base = {
  host: '0.0.0.0',
  port: '8001',
  db: {
    url: 'mongodb://localhost:27017',
    name: 'bridge'
  },
  logConfig: {
    flag: true,
    outDir: `${process.cwd()}/public/log`,
    level: 'info'
  }
};
module.exports = base;
