const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database');

const taskRoutes = require('./routes/taskRoutes');




const cors = require('cors');

app.use(bodyParser.json({extended:false}));

app.use(cors());

app.use(taskRoutes);

sequelize.sync()
.then(() => {
    app.listen(6600);
})
.catch(err => console.log(err))



