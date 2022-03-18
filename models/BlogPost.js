const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'Users', key: 'id',
    },
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost', Attributes,
  {
      timestamps: false,
      tableName: 'Categories',
    });

  BlogPost.associate = (models) => { 
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
  };

  return BlogPost;
}; 