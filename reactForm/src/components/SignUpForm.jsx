import { useState } from "react";

//sign up function
export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
      console.log(json.token);
      setToken(json.token);
    } catch (error) {
      setError(error.message);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </label>
        <label>
          Passowrd:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
