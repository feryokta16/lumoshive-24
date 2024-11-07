/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ActivityDetail from "../pages/ActivityDetail";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useDelete } from "../hooks/useDelete";

const ActivityList = ({ todos, deleteTodo }) => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  // const { id } = useParams();
  const { data, deleteData } = useFetch("http://localhost:3000/activities");

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <ul className="list-group">
      {posts &&
        posts.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{todo.title}</span>
            <div>
              <Link to={`/activity/${todo.id}`}>
                <button className="btn btn-secondary btn-sm mx-1">
                  Details
                </button>
              </Link>
              <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ActivityList;
