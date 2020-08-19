const Task = require('../models/task');

module.exports.home = async function(req,res)
{
    try
    {
        let tasks = await Task.find({});
        
        return res.render('home', {
            title : 'TODO App | Home',
            tasks : tasks
        });        
    }
    catch(err)
    {
        console.log('There is an error ', err);
        return;
    }
}