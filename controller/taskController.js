const toDo = require('../model/todo');

exports.addTask = async (req,res,next) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const dueDate = req.body.dueDate;

    try{
        const result = await toDo.create({
            title:title,
            description:description,
            status:status,
            dueDate:dueDate
        })

        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
    }
}

exports.getTasks = async (req,res,next) => {
    try{
        const tasks = await toDo.findAll();
        res.status(200).json(tasks)
    }
    catch(err){
        console.log(err);
    }
    
}

exports.deleteTask = async (req,res,next) => {
    try{
        const taskId = req.params.id;
        const task = await toDo.findOne({where:{id:taskId}});
        await task.destroy();

        res.status(200).json({message:"task deleted"});

    }
    catch(err){
        console.log(err);
    }
}

exports.getTask = async (req,res,next) => {
    try{
        const taskId = req.params.id;
        const task = await toDo.findOne({where:{id:taskId}});
        res.status(200).json(task);
    }
    catch(err){
        console.log(err);
    }
}