'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT } = Sequelize
    await queryInterface.createTable('comment', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uid: INTEGER,
      uname: STRING(30),
      aid: INTEGER,
      comment: TEXT,
      type: STRING(3),
      replyid: INTEGER,
      parentid: INTEGER,
      created_at: DATE,
      updated_at: DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comment')
  }
};
