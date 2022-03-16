'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesTable = queryInterface.createTable('Categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    return categoriesTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Categories");
  }
};
