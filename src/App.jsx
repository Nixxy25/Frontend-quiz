import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./reducers/dataSlice";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import HtmlPage from "./pages/htmlPage";
import JavascriptPage from "./pages/javascriptPage";
import CssPage from "./pages/cssPage";
import AccessibilityPage from "./pages/accessibilityPage";

import "./App.css"

const App = () => {
  const data = useSelector(state => state.quizzes.quizzes)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/html" element={<HtmlPage />} />
    <Route path="/javascript" element={<JavascriptPage data = {data} />} />
    <Route path="/accessibility" element={<AccessibilityPage />} />
    <Route path="/css" element={<CssPage />} />
  </Routes>
  );
}

export default App;