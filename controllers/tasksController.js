const Task = require('../models/task');

module.exports.create = async function(req, res)
{
    try{

        await Task.create({
            description: req.body.description,
            category: req.body.category,
            duedate: req.body.duedate
        });

    }
    catch(err)
    {
        console.log('Error in creating a new task ', err);
    }    

    return res.redirect('back');
}


module.exports.destroy = async function(req,res)
{
    try
    {
        let task = await Task.findById(req.params.id);
        task.remove();      
    }
    catch(err)
    {
        console.log('Error in deleting the task ', err);
    }
    
    return res.redirect('back');
}