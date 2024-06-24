const express = require('express');
const { addTeacher, getTeachers, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, admin, addTeacher)
    .get(protect, getTeachers);

router.route('/:id')
    .put(protect, admin, updateTeacher)
    .delete(protect, admin, deleteTeacher);

module.exports = router;
