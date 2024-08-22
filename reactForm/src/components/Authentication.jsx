import { useState } from "react";

//authentification function
export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      console.log("Authentication result", json);
      setSuccessMessage(json.message);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && (
        <p>
          {successMessage} Thanks {}
        </p>
      )}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticated Token</button>
    </>
  );
}
