// model apenas de fk
module.exports = (sequelize) => {
  const PostsCategory = sequelize.define('PostsCategory', {},
    {
      timestamps: false,
      tableName: 'games_tags',
    });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategory, as: 'categories' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategory, as: 'postId' },
    );
  };

  return PostsCategory;
};