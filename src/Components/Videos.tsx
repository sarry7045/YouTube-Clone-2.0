import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

interface videosProps {
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
      title: string;
    };
  };
}

const Videos = ({ videos , direction}: any) => {
  console.log("VideosArray", videos);
  if (!videos?.length) return "Loading...";
  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {videos?.map((items: any, id: any) => (
          <Box key={id}>
            {items?.id?.videoId && <VideoCard video={items} />}
            {items?.id?.channelId && <ChannelCard channelDetail={items} />}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Videos;
