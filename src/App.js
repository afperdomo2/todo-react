import { HashRouter, Route, Routes } from "react-router-dom";

import { EditTodoPage } from "./pages/EditTodoPage";
import { HomePage } from "./pages/HomePage";
import { NewTodoPage } from "./pages/NewTodoPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export { App };
