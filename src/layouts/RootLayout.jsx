import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Rootlayout() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Rootlayout;
