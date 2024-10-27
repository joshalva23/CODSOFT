import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import NoPage from "./pages/NoPage.tsx";
import Nav from "./components/Nav.tsx"
import BlogArticle from "./pages/BlogArticle.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/blogs/article/:id" element={<BlogArticle />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
