import { useEffect, useState } from "react";
import { getHealth } from "./services/api";

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const data = await getHealth();
        setHealth(data);
      } catch (error) {
        setError(error.message);
      }
    };

    checkBackend();
  }, []);

  return (
    <main>
      <h1>B2C E-Commerce Platform</h1>

      {health && (
        <pre>
          {JSON.stringify(health, null, 2)}
        </pre>
      )}

      {error && <p>{error}</p>}
    </main>
  );
}

export default App;