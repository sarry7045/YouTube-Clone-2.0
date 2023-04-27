import { Box, Typography } from "@mui/material";
import { fetchAPI } from "../API/fetchFromAPI";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState<any>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2} color="white">
          Search Results for: <span style={{ color: "red" }}>{searchTerm}</span>{" "}
          Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
