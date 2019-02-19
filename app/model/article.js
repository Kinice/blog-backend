'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('user', {
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

  return User
}