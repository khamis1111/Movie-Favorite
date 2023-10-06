import { Route, Routes } from "react-router-dom";
import MainNavbar from "./utility/MainNavbar";
import AddMoviePage from "./pages/AddMovie/AddMoviePage";
import WatchedPage from "./pages/Watched/WatchedPage";
import WatchListpage from "./pages/WatchList/WatchListpage";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<WatchListpage />} />
        <Route path="/watched" element={<WatchedPage />} />
        <Route path="/add" element={<AddMoviePage />} />
      </Routes>
    </>
  );
}

export default App;
