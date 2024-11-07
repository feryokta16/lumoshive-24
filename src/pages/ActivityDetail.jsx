/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTimer from "../hooks/useTimer";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const ActivityDetail = () => {
  const navigate = useNavigate();
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/activities/${id}`
  );

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-primary">Sample Activity Title</h2>
      <p className="text-muted">{post.description}</p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">Time Spent: {time} seconds </p>
          <div className="btn-group">
            <button onClick={startTimer} className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button onClick={stopTimer} className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button onClick={resetTimer} className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
