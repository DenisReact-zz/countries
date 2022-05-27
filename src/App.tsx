import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { getCountries } from "./redux/countriesSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<Country />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
