import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";

export default function App() {
  return (
    <>
      <NavBar />

      <h1>Welcome to HabitTracker</h1>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);