import Tasks from '../models/teste';

module.exports = {

    async index(req, res) {
        const tasks = await Tasks.find();
       return res.json(tasks);
    },

    async create(req, res){
        const task = await Tasks.create(req.body);
        return res.json(task);
    }



}