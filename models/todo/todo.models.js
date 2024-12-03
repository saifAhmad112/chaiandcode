import mangoose from "mangoose";
const todoSchema = new mangoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim:true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodo: [
      {
        type: mangooseSchema.type.ObjectId,
        ref: "SubTodo",
      },
    ], // array of sub todo
  },
  {
    timestams: true,
  }
);

export const Todo=mangoose.model("Todo",todoSchema)
