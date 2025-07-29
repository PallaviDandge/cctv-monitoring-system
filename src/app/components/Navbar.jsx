'use client'
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton
} from "@mui/material";
import "../globals.css"; 

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" className="navbar" elevation={0} sx={{
    backgroundColor: 'transparent', 
    borderBottom: '1px solid #333',
  }}>
      <Toolbar className="navbar-toolbar">
        <Box className="logo-container">
          <img src="/images/iconlogo.png" alt="logo" className="logo-image" />
          <Typography
            variant="h6"
            fontFamily={"Plus Jakarta Sans"}
            fontSize="16px"
          >
            MANDLAC<strong className="highlight">X</strong>
          </Typography>
        </Box>

        <Box className="nav-links">
          <Box className="nav-item">
            <img
              src="/images/dashboard.png"
              alt="dashboard"
              className="nav-icon"
            />
            <Typography>Dashboard</Typography>
          </Box>
          <Box className="nav-item">
            <img
              src="/images/camera.png"
              alt="dashboard"
              className="nav-icon"
            />
            <Typography>Cameras</Typography>
          </Box>
          <Box className="nav-item">
            <img
              src="/images/scenes.png"
              alt="dashboard"
              className="nav-icon"
            />
            <Typography>Scenes</Typography>
          </Box>
          <Box className="nav-item">
            <img
              src="/images/incident.png"
              alt="dashboard"
              className="nav-icon"
            />
            <Typography>Incidents</Typography>
          </Box>
          <Box className="nav-item">
            <img
              src="/images/users.png"
              alt="dashboard"
              className="nav-icon"
            />
            <Typography>Users</Typography>
          </Box>
        </Box>

        <Box
          display={"flex"}
          sx={{
            width: "200px",
            height: "48px",
            padding: 2,
            gap: 2,
            borderRadius: "6px"
          }}
        >
          <Avatar
            alt="Mohammed Ajhas"
            src="/images/profile.png"
            sx={{
              width: 32,
              height: 32,
              overflow: "hidden"
            }}
            imgProps={{
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center -40%",
                transform: "scale(1.6)"
              }
            }}
          />

          <Box className="name-email">
            <Typography
              sx={{
                fontSize: "14px", 
                fontWeight: 600, 
                lineHeight: "100%", 
                letterSpacing: "0%", 
                width: "124px",
                height: "14px",
                color: "#fff",
                marginTop: "4px"
              }}
            >
              Mohammed Ajhas
            </Typography>
            <Typography
              sx={{
                width: "120px",
                height: "16px",
                fontSize: "12px"
              }}
            >
              ajhas@mandlac.com
            </Typography>
          </Box>
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{ width: "16px", height: "16px", mt: "10px" }}
          >
            <img src="/images/downarrow.png" alt="arrow" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
