import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
const Feed = React.lazy(() => import("./Components/Feed"));
const VideoDetails = React.lazy(() => import("./Components/VideoDetails"));
const ChannelDetails = React.lazy(() => import("./Components/ChannelDetails"));
const SearchFeed = React.lazy(() => import("./Components/SearchFeed"));

const App = () => (
  <>
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="*" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </>
);

export default App;
