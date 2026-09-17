import { BrowserRouter, Route, Routes } from "react-router";
import Rootlayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import WinrarKeyGen from "./pages/WinrarKeyGen";
import MonokaiProKeyGen from "./pages/MonokaiProKeyGen";
import NotFound from "./pages/NotFound";
import YourUninstaller from "./pages/YourUninstaller";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/winrar-keygen" element={<WinrarKeyGen />}></Route>
          <Route
            path="/monokai-pro-keygen"
            element={<MonokaiProKeyGen />}
          ></Route>
          <Route path="/your-uninstaller" element={<YourUninstaller />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
