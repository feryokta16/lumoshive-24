import React, { useEffect, useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

const Home = () => {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Walk the dog",
      description: "Walk the dog for 30 minutes",
    },
    {
      id: 2,
      title: "Do the dishes",
      description: "Do the dishes for 15 minutes",
    },
  ]);
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [todoId, setTodosId] = useState(3);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todoId,
      title: input,
      description: description,
    };
    setTodos([...todos, newTodo]);
    setInput("");
    setDescription("");
    setTodosId(todoId + 1);
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="my-4">Daily Activity Manager</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add Activity
      </button>
      <ActivityList todos={todos} deleteTodo={deleteTodo} />
      <ActivityForm
        showModal={showModal}
        setShowModal={setShowModal}
        handleInputChange={handleInputChange}
        handleDescriptionChange={handleDescriptionChange}
        addTodo={addTodo}
        input={input}
        description={description}
      />
    </div>
  );
};

export default Home;
