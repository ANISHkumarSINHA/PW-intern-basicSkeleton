const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
    const { student, teacher, date, purpose } = req.body;
    const appointment = await Appointment.create({ student, teacher, date, purpose });
    res.status(201).json(appointment);
};

exports.getAppointments = async (req, res) => {
    const appointments = await Appointment.find().populate('student').populate('teacher');
    res.json(appointments);
};

exports.updateAppointment = async (req, res) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(appointment);
};
