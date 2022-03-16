'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postCategoriesTable = queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },
    });

    return postCategoriesTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostsCategories");
  }
};
