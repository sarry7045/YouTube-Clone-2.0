import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchAPI } from "../API/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  // const { snippet:{title, channelId, channelTitle}, statistics:{ viewCount, likeCount}} = videoDetails;

  if (!videoDetails?.snippet) return "Loading...";
  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {videoDetails?.snippet?.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                color="#fff"
                py={1}
                px={2}
              >
                <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {videoDetails?.snippet?.channelTitle}{" "}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetails?.statistics?.viewCount
                    ).toLocaleString()}{" "}
                    Views
                  </Typography>

                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetails?.statistics?.likeCount
                    ).toLocaleString()}{" "}
                    Likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VideoDetails;
