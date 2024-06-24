const express = require('express');
const { bookAppointment, getAppointments, updateAppointment } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, bookAppointment)
    .get(protect, getAppointments);

router.route('/:id')
    .put(protect, updateAppointment);

module.exports = router;
