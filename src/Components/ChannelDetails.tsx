import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../API/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVidoes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`channels?part="snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVidoes(data?.items);
    });
  }, [id]);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          >
            <ChannelCard channelDetail={channelDetails} marginTop="-110px" />
          </div>
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetails;
