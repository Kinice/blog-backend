'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('user', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: STRING(30),
      password: STRING(30),
      type: STRING(3),
      email: STRING(45),
      phone: STRING(20),
      created_at: DATE,
      updated_at: DATE
  })

  return User;
}