'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    hostname: '127.0.0.1',
    port: 3306,
    database: 'blog',
  };

  return config;
};