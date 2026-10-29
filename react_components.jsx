
import { useState } from "react";

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Footer({ text }) {
  return <footer>{text}</footer>;
}

function Card({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

function Form({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(name);
    }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <Button text="Submit" />
    </form>
  );
}

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <Header title="My React App" />

      <Card
        title="Welcome"
        description="This is a reusable card."
      />

      <Form onSubmit={(name) => setMessage(`Hello, ${name}!`)} />

      <Button text="Click Me" onClick={() => alert("Clicked!")} />

      <p>{message}</p>

      <Footer text="© 2026 My App" />
    </>
  );
}
