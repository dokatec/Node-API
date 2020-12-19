import mongoose from 'mongoose';

const tasksShema = new mongoose.Schema({
    tasks: String,
    description: String,
});

const Tasks = mongoose.model('Tasks', tasksShema);

module.exports = Tasks;

