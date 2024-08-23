import { useState } from "react";

//sign up function
export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  console.log(error);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //posts username to api
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({ username }),
        }
      );
      const json = await response.json();
      console.log(json);
      setToken(json.token);
      setSuccessMessage(json.message);
    } catch (error) {
      setError(error.message);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h2>Sign Up!</h2>

      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Passowrd:{" "}
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
