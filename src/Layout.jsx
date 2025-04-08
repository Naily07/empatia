import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
