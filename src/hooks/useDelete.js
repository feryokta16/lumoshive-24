import { useState, useEffect } from "react";
import axios from "axios";

export const useDelete = (url) => {
  const [dataDelete, setDataDelete] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async () => {
    try {
      const response = await axios.delete(url);
      setDataDelete(response.dataDelete);
      setIsPending(false);
    } catch {
      setError(error);
      setIsPending(false);
    }
  };
  return { deleteData, isPending, error };
};
