import { useState } from "react";
import Header from "./components/Header";
import PasswordGenerator from "./pages/PasswordGenerator";
import UuidGenerator from "./pages/UuidGenerator";
import AdBannerRight from "./components/AdBannerRight";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("password");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header setPage={setPage} />
      <div className="flex flex-grow p-6 flex-col md:flex-row">
        <div className="md:w-2/3 flex justify-center">
          <div className="w-full max-w-md">
            {page === "password" ? <PasswordGenerator /> : <UuidGenerator />}
          </div>
        </div>
        <div className="hidden md:flex md:w-1/3 bg-white shadow-md p-4 items-center justify-center">
          <AdBannerRight />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
