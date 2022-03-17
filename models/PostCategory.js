// model apenas de fk
module.exports = (sequelize) => {
  const PostsCategory = sequelize.define('PostsCategory', {},
    {
      underscored: true,
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