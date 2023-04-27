import { Stack, Box, Typography } from "@mui/material";
import { fetchAPI } from "../API/fetchFromAPI";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { useEffect, useState } from "react";

const Feed = () => {
  const curretYear: Date = new Date();
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  const windowWidth: number = window.innerWidth;

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "4px solid #7f7f7f",
            px: { sx: 0, md: 4 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {windowWidth > 765 ? (
            <Typography
              className="copyRight"
              variant="body2"
              sx={{ mt: 1.5, color: "#fff" }}
            >
              Copyright {curretYear.getFullYear()} Google | Youtube.
            </Typography>
          ) : null}
        </Box>
        <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h6" fontWeight="bold" mb={2} color="white">
            {selectedCategory} Videos
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
