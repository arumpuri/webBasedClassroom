const express = require('express');
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, adminOnly, createCourse);
router.get('/', getCourses);
router.get('/:id', protect, getCourseById);
router.put('/:id', protect, adminOnly, updateCourse);
router.delete('/:id', protect, adminOnly, deleteCourse);

module.exports = router;
