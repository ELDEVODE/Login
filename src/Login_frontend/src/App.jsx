import { useState } from "react";
import { Login_backend } from "declarations/Login_backend";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Login_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      {/* <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-6xl">
          Enter your name: &nbsp;
        </label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section> */}
      <Navbar />
      <Login />
    </main>
  );
}

export default App;
