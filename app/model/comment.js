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
    aid: INTEGER,
    comment: TEXT,
    type: STRING(3),
    replyid: INTEGER,
    parentid: INTEGER,
    created_at: DATE,
    updated_at: DATE
  })

  return User
}