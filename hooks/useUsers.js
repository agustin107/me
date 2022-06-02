import { useState, useEffect } from "react"

export function useUsers() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();

      setUsers(data.results);
      setIsLoading(false);
    }

    getUsers();
  }, []);

  return { users, isLoading }
}