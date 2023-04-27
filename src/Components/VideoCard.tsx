import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }: any) => {
  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      thumbnails: {
        high: { url },
      },
    },
  } = video;

  const defaultPath: string = "/video/GDa8kZLNhJ4";
  const defaultChannelPath: string = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
  const defaultTitle: string =
    "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
  const defaultChannelTitle: string = "JavaScript Mastery";

  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "300px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : defaultPath}>
          <CardMedia
            image={url}
            sx={{
              width: { xs: "100%", sm: "358px", md: "320px" },
              height: 180,
            }}
          ></CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : defaultPath}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {title.slice(0, 60) || defaultTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={channelId ? ` /channel/${channelId}` : defaultChannelPath}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {channelTitle || defaultChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "#B4B4B4", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
