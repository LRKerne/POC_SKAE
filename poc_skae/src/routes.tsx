import { BrowserRouter, Route, Routes} from "react-router-dom";
import Quiz from './components/Quiz/quiz';
import Login from "./components/Login/Login";

const Rout = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login onSubmit={({username, password})=>{ console.log (username, password)}}/>}></Route>
      <Route path="/Quiz" element={<Quiz />}></Route>
      <Route path="/app" element={<h1>App</h1>} ></Route>
      <Route path="*" element={<h1>Page not found</h1>} ></Route>
    </Routes>
  </BrowserRouter>
);

export default Rout;