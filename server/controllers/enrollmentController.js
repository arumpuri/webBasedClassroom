const Enrollment = require('../models/enrollment');
const Course = require('../models/course');

const enrollInCourse = async (req, res) => {
    const { courseId } = req.body;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const existingEnrollment = await Enrollment.findOne({ user: req.user._id, course: courseId });
        if (existingEnrollment) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        const enrollment = new Enrollment({
            user: req.user._id,
            course: courseId
        });

        await enrollment.save();
        res.status(201).json({ message: 'Enrolled successfully', enrollment });
    } catch (error) {
        res.status(400).json({ message: 'Error enrolling in course', error });
    }
};

const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ user: req.user._id }).populate('course', 'title description');
        res.json(enrollments);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching enrollments', error });
    }
};

const getEnrollmentById = async (req, res) => {
    try {
        const enrollment = await Enrollment.findById(req.params.id).populate('course', 'title description');
        if (!enrollment || enrollment.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.json(enrollment);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching enrollment', error });
    }
};

module.exports = { enrollInCourse, getEnrollments, getEnrollmentById };
