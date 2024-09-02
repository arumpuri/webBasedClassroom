const Course = require('../models/course');

const createCourse = async (req, res) => {
    try {
        const { title, description, instructor, modules, price } = req.body;
    
        // Create a new course instance
        const course = new Course({
          title,
          description,
          instructor,  // Should be the authenticated user's ID
          modules,
          price,
        });
    
        // Save the course to the database
        await course.save();
    
        res.status(201).json({ message: 'Course created successfully', course });
      } catch (error) {
        res.status(400).json({ message: 'Error creating course', error });
      }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching courses', error });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('instructor', 'name');
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching course', error });
    }
};

const updateCourse = async (req, res) => {
    try {
      const { title, description, modules, price } = req.body;
      
      // Find and update the course
      const course = await Course.findByIdAndUpdate(
        req.params.id,
        { title, description, modules, price },
        { new: true }
      );
  
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
      res.status(400).json({ message: 'Error updating course', error });
    }
  };
  const deleteCourse = async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting course', error });
    }
  };

module.exports = { createCourse, getCourses, getCourseById, updateCourse, deleteCourse };
