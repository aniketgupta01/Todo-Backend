const Sequelize = require('sequelize');

const sequelize = new Sequelize('to-do','root','Aniket123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;