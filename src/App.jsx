import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Footer from "./pages/Footer";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./components/Register";
import CheckOut from "./pages/Book/CheckOut";
import GetSingleBook from "./pages/Book/GetSingleBook";
import PrivateRoute from "./routes/PrivateRoute";
import AppContextProvider from "./context/AuthContext";
import AdminLogin from "./pages/admin/AdminLogin";
import Admin from "./pages/admin/Admin";
import UpdateBook from "./pages/Dashboard/UpdateBook";
import ManageBooks from "./pages/Dashboard/ManageBooks";
import AddBook from "./pages/Dashboard/AddBook";
import AdminRoute from "./routes/AdminRoutes";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
function App() {
  return (
    <>
      <AppContextProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/orders/:email" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route
                path=""
                element={
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="addbook"
                element={
                  <AdminRoute>
                    <AddBook />
                  </AdminRoute>
                }
              />
              <Route
                path="ManageBooks"
                element={
                  <AdminRoute>
                    <ManageBooks />
                  </AdminRoute>
                }
              />
              <Route
                path="updatebook/:id"
                element={
                  <AdminRoute>
                    <UpdateBook />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckOut />
                </PrivateRoute>
              }
            />
            <Route path="/getsinglebook/:id" element={<GetSingleBook />} />
          </Routes>
        </main>
        <Footer />
      </AppContextProvider>
    </>
  );
}

export default App;
