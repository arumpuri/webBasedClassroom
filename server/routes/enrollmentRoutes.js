const express = require('express');
const { enrollInCourse, getEnrollments, getEnrollmentById } = require('../controllers/enrollmentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/enroll', protect, enrollInCourse);
router.get('/', protect, getEnrollments);
router.get('/:id', protect, getEnrollmentById);

module.exports = router;
