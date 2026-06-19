import { useState } from "react";
import { useCreateTaskMutation } from "../slices/taskApiSlice";

const TaskScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    dueDate: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clearInputs = () => {
    setFormData({
      title: "",
      description: "",
      status: "",
      priority: "",
      dueDate: "",
    });
  };

  const [createTask, { data, isLoading, isError }] = useCreateTaskMutation;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createTask(formData);
      clearInputs();
    } catch (error) {
      console.log({ ...error.message, message: "could not create task" });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter title"
          required
          name="title"
          value={formData.title}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="enter description"
          name="description"
          value={formData.description}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="enter status"
          required
          name="status"
          value={formData.status}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="enter priority"
          required
          name="priority"
          value={formData.priority}
          onChange={changeHandler}
        />
        <input
          type="date"
          placeholder="due date"
          name="dueDate"
          value={formData.dueDate}
          onChange={changeHandler}
        />
        <input type="submit" placeholder="add task" />
      </form>
    </div>
  );
};

export default TaskScreen;
