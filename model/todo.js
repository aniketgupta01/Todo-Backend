const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const toDo = sequelize.define('todo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:Sequelize.STRING,
    description:Sequelize.STRING,
    status:Sequelize.STRING,
    dueDate:Sequelize.STRING
})

module.exports = toDo;