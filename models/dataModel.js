const { DataTypes } = require('sequelize');
const sequelize = require('../server').sequelize;

// Modelo de Usuario
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plan: {
    type: DataTypes.ENUM('free', 'basic', 'premium'),
    defaultValue: 'free'
  }
});

// Modelo de Aplicación
const App = sequelize.define('App', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

// Modelo de Licencia
const License = sequelize.define('License', {
  licenseKey: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  expiryDate: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Modelo de Instalación (para relacionar usuarios con aplicaciones)
const Installation = sequelize.define('Installation', {
  installedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// Relaciones
// Un Usuario puede tener muchas Instalaciones
User.hasMany(Installation);
Installation.belongsTo(User);

// Una Aplicación puede ser instalada por muchos Usuarios
App.hasMany(Installation);
Installation.belongsTo(App);

// Un Usuario puede tener muchas Licencias
User.hasMany(License);
License.belongsTo(User);

// Una Aplicación puede estar asociada a muchas Licencias
App.hasMany(License);
License.belongsTo(App);

module.exports = {
  User,
  App,
  License,
  Installation
};
