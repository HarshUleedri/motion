import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";

const AppLayout = () => {
  return (
    <div className="layout flex">
      <Sidebar />

      <div className="flex-1 ">
        <Navbar />

        <main className="min-h-screen p-4 w-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
