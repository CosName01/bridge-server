const base = {
  host: '0.0.0.0',
  port: '8001',
  logConfig: {
    flag: true,
    outDir: `${process.cwd()}/public/log`,
    level: 'info'
  }
};
module.exports = base;
