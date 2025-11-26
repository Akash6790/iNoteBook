import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NoteState from "./context/notes/Notestate"; // <- make sure path & filename match exactly

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteState>
      <App />
    </NoteState>
  </StrictMode>
);
