import { Stack } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

interface Icons {
  name: string;
  icon: any;
}

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: any;
}

const Categories: Icons[] = [
  { name: "Default", icon: <HomeIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "JS Mastery", icon: <CodeIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}: SidebarProps) => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column", sx: "auto" },
        }}
      >
        {Categories?.map((Items) => {
          const { name, icon } = Items;
          return (
            <>
              <button
                className="category-btn"
                onClick={() => setSelectedCategory(name)}
                style={{
                  background: name === selectedCategory && "#4f4f4f",
                  color: "#fff",
                  opacity: name === selectedCategory ? "1" : "0.8",
                }}
                key={name}
              >
                <span style={{ marginRight: "15px" }}>{icon}</span>
                <span>{name}</span>
              </button>
            </>
          );
        })}
      </Stack>
    </>
  );
};

export default Sidebar;
