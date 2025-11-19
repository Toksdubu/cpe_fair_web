import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { fetchMain, createMain, deleteMain } from "../api/mainApi";

const useMain = () => {
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchMain();
      setMainData(data);
    } catch (err) {
      setError(err?.message || "Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(
    async (newMainData) => {
      try {
        setLoading(true);
        setError(null);

        await createMain(newMainData);
        toast.success("Successfully added the player");

        await fetchAll();
      } catch (err) {
        setError(err?.message || "Failed to create");
        toast.error("An error occurred while saving the player");
      } finally {
        setLoading(false);
      }
    },
    [fetchAll]
  );

  const remove = useCallback(
    async (id) => {
      try {
        setLoading(true);
        setError(null);

        await deleteMain(id);
        toast.success("Successfully deleted the player");

        await fetchAll();
      } catch (err) {
        setError(err?.message || "Failed to delete");
        toast.error("An error occurred while deleting the player");
      } finally {
        setLoading(false);
      }
    },
    [fetchAll]
  );

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { mainData, loading, error, fetchAll, create, remove };
};

export default useMain;
