import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const index = (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
);
export default index;
