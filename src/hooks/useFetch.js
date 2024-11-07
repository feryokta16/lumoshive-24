import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  const deleteData = async (id) => {
    setIsDeleting(true);
    setDeleteError(null);
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setDeleteError(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return { data, isPending, error, deleteData, isDeleting, deleteError };
};
