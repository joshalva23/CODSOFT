import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import PersonalBlog from "./pages/PersonalBlog";

import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <Nav />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="edit" element={<CreateBlog />} />
            <Route path="myblogs" element={<PersonalBlog />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
