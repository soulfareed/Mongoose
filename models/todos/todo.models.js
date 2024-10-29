import mongoose, { modelNames, mongo } from 'mongoose';
import { subTodo } from './sub_todo.models';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
    ],//array of sub-todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
