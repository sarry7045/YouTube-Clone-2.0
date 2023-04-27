import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { IconButton, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={3}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="" style={{ display: "flex", alignItems: "center" }}>
        <img src="/Youtube.png" alt="Logo" height={40} />
      </Link>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          pl: 2,
          boxShadow: "none",
          border: "1px solid #e3e3e3",
          mr: { sm: 5 },
        }}
      >
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "#000" }}>
          <Search />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;
