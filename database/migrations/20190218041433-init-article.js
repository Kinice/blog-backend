'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT } = Sequelize
    await queryInterface.createTable('article', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uid: INTEGER,
      uname: STRING(30),
      title: STRING(30),
      content: TEXT,
      topic: STRING(3),
      tags: STRING(200),
      thumbs: INTEGER,
      created_at: DATE,
      updated_at: DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('article')
  }
};
