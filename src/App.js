import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard"; // Import AdminDashboard page
import ShopRoutes from "./shopRoutes"; // Import ShopRoutes

function App() {
  return (
    <Router>
      {/* ToastContainer for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* NavBar for consistent navigation */}
     

      {/* Suspense for lazy loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Admin Dashboard Route */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Main Shop Routes */}
          <Route path="/*" element={<ShopRoutes />} />
        </Routes>
      </Suspense>

      {/* Footer for consistent UI */}
     
    </Router>
  );
}

export default App;