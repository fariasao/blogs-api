const { DataTypes } = require('sequelize');

const Attributes = { // exemplo dado pelo gaspar para sair do lint
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define('User', Attributes,
  {
      underscored: true,
      timestamps: false,
      tableName: 'Users',
    });

  User.associate = (models) => { // um usario tem varios posts.
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'BlogPosts' });
  };

  return User;
}; 