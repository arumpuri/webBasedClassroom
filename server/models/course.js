const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  modules: [
    {
      title: { type: String, required: true },
      lessons: [
        {
          title: { type: String, required: true },
          content: { type: String, required: true },
          videoUrl: { type: String },
          quiz: [
            {
              question: String,
              options: [String],
              correctOption: Number,
            },
          ],
        },
      ],
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;

