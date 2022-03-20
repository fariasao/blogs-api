const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', Attributes,
  {
      timestamps: false,
      tableName: 'Categories',
    });

  Category.associate = (models) => { // um usuario pode fazer varios posts. 
    Category.hasMany(models.BlogPost, { foreignKey: 'CategoryId', as: 'BlogPosts' });
  };

  return Category;
}; 