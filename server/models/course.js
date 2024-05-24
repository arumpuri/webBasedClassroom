const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  title: String,
  content: String,
  resource_url: String
}, { timestamps: true })
const Lesson = mongoose.model('Lesson', LessonSchema)

const CourseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: Buffer,
      contentType: String,
    },
    category: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    educator: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    lessons: [LessonSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
