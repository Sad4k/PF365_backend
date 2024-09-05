const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../Dev_database.sqlite') // Ruta del archivo SQLite
  },
  production: {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'yourpassword',
    database: 'yourdatabase'
  }
};
