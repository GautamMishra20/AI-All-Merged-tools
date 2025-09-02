import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ArticleWritting from "./pages/ArticleWritting";
import Blog from "./pages/Blog";
import ImageGenerate from "./pages/ImageGenerate";
import BackGroundRemover from "./pages/BackGroundRemover";
import ObjectRemover from "./pages/ObjectRemover";
import ResumeReview from "./pages/ResumeReview";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<ArticleWritting />} />
          <Route path="blog-titles" element={<Blog />} />
          <Route path="generate-images" element={<ImageGenerate />} />
          <Route path="remove-background" element={<BackGroundRemover />} />
          <Route path="remove-objects" element={<ObjectRemover />} />
          <Route path="review-resume" element={<ResumeReview />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
