import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchQuizs } from "./reducers/dataSlice";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import HtmlPage from "./pages/htmlPage";
import JavascriptPage from "./pages/javascriptPage";
import CssPage from "./pages/cssPage";
import AccessibilityPage from "./pages/accessibilityPage";

import "./App.css"

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuizs())
 
  }, [])

  const data = useSelector((state) => {
    console.log("state..", state.app)
    return state.app
  })

  const quiz = data.users.quizzes || []



  return (
  <Routes>
    <Route path="/" element={<HomePage  quiz = {quiz}/>} />
    <Route path="/html" element={<HtmlPage  quiz = {quiz}/>} />
    <Route path="/javascript" element={<JavascriptPage />} />
    <Route path="/accessibility" element={<AccessibilityPage />} />
    <Route path="/css" element={<CssPage />} />
  </Routes>
  );
}

export default App;
