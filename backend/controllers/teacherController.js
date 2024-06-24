const Teacher = require('../models/Teacher');

exports.addTeacher = async (req, res) => {
    const { name, department, subject, user } = req.body;
    const teacher = await Teacher.create({ name, department, subject, user });
    res.status(201).json(teacher);
};

exports.getTeachers = async (req, res) => {
    const teachers = await Teacher.find().populate('user');
    res.json(teachers);
};

exports.updateTeacher = async (req, res) => {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(teacher);
};

exports.deleteTeacher = async (req, res) => {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: 'Teacher removed' });
};
