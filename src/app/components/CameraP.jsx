"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  List,
  ListItem,
  Button,
  Grid,
  ImageList,
  ImageListItem
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { SEEDED_INCIDENTS } from "../constants/incidents";
//utils
import formatIncidentTime from "../utils/FormatTime";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const CameraPanel = () => {


 return (
    <Box
      sx={{
        width: "1440px",
        height: "820px",
        padding: "24px",
        gap: "24px",
        position: "relative",
        top: "36px",
        transform: "rotate(0deg)",
        opacity: 1
      }}
    >
      <Box
        sx={{
          width: "1392px",
          height: "450px",
          gap: "24px",
          transform: "rotate(0deg)",
          opacity: 1,
          display: "flex"
        }}
      >
        {/* Left: Main Camera Feed */}

        <Card
          sx={{
            width: "796px",
            height: "449px",
            position: "relative",
            backgroundColor: "#151514"
          }}
        >
          <CardMedia
            component="img"
            image="/images/img1.png"
            alt="Camera Feed"
          />

          <Box
            sx={{
              position: "absolute",
              top: "16px",
              left: "16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#1C1C1C",
              padding: "4px 8px",
              borderRadius: "6px"
            }}
          >
            <CalendarMonthOutlinedIcon
              sx={{ fontSize: 16, color: "#FFFFFF" }}
            />
            <Typography sx={{ fontSize: "12px", color: "#FFFFFF" }}>
              07 Jul 2025
            </Typography>
          </Box>
          <Box
            display={"flex"}
            sx={{
              position: "absolute",
              height: "24px",
              width: "116px",
              bottom: "14px",
              left: "12px",
              backgroundColor: "#0B0B0B",
              gap: "4px",
              padding: "2px 8px 2px 10px"
            }}
          >
            <img
              src="/images/disc.png"
              alt="dics"
              style={{ height: "12px", width: "12px",marginTop:'5px' }}
            />
            <Typography
              sx={{
                color: "#ffffff",
                width: "82px",
                height: "20px",
                fontWeight: 500
              }}
            >
              Camera-01
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "0.1px",
              right: "16px",
              display: "flex",
              gap: "12px"
            }}
          >
            {SEEDED_INCIDENTS.slice(0, 2).map((incident) => (
              <Box
                key={incident.id}
                display="flex"
                flexDirection="column"
                sx={{ width: "120px", height: "100.6px" }}
              >
                <ImageList
                  sx={{
                    overflow: "hidden", // disables scrollbars
                    borderRadius: "6px" // matches image radius
                  }}
                  cols={1}
                >
                  <ImageListItem sx={{ position: "relative" }}>
                    <img
                      src={incident.thumbnailUrl}
                      alt={incident.camera}
                      style={{
                        objectFit: "cover",
                        display: "block", // avoids scrollbar due to inline rendering
                        borderRadius: "3.2px"
                      }}
                    />

                    {/* Overlay Box */}
                    <Box
                      sx={{
                        position: "absolute",

                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#0B0B0B",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        width: "calc(100% - 8px)" // ensures tight alignment inside image
                      }}
                    >
                      <Typography sx={{ fontSize: "10px", color: "#FFFFFF" }}>
                        Camera - 0{incident.cameraId}
                      </Typography>
                      <MoreVertOutlinedIcon
                        sx={{ fontSize: "12px", color: "#FFFFFF" }}
                      />
                    </Box>
                  </ImageListItem>
                </ImageList>
              </Box>
            ))}
          </Box>
        </Card>

        {/* Right: Incident Sidebar */}
        <Box
          sx={{
            width: "572px",
            height: "450px",
            transform: "rotate(0deg)",
            opacity: 1,
            backgroundColor: "#131313",
            borderRadius: "6px"
          }}
        >
          {/* Header */}
          <Box
            display="flex"
            sx={{
              width: "572px",
              height: "20px",
              padding: "16px",
              gap: "8px",
              transform: "rotate(0deg)",
              opacity: 1
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "26px",
                transform: "rotate(0deg)",
                opacity: 1
              }}
            >
              <img src="/images/Featured icon.png" alt="dashboard icon" />
            </Box>

            <Box
              display="flex"
              gap={"6px"}
              sx={{
                width: "508px",
                height: "18px",
                justifyContent: "space-between",
                mt: 0.6
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#FAFAFA",
                  lineHeight: "100%",
                  letterSpacing: "-2.5%"
                }}
              >
                {SEEDED_INCIDENTS.length} Unresolved Incident
              </Typography>
              <Box
                display={"flex"}
                sx={{
                  width: "200px",
                  height: "20px",
                  gap: "3px",
                  justifyContent: "space-between"
                }}
              >
                <Box>
                  {["", " (1)", " (2)"].map((suffix, idx) => (
                    <img
                      key={idx}
                      src={`/images/_Badge base${suffix}.png`}
                      alt={`badge ${idx}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "-6px",
                        zIndex: idx + 1
                      }}
                    />
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "10.6px",
                    color: "#D4D4D4",
                    borderColor: "#0B0B0B",
                    padding: "2px 8px",
                    borderRadius: "16px",
                    textTransform: "none",
                    width: "145px",
                    height: "20px"
                  }}
                >
                  <img
                    src="/images/check-check.png"
                    alt="check"
                    style={{
                      width: "12px",
                      height: "12px",
                      marginRight: "4px"
                    }}
                  />
                  4 resolved incident
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Incident Preview Cards */}
          <Box
            sx={{
              margin:'0',
              flexGrow: 1,
              overflowY: "auto",
               padding: "12px ",
              gap: "16px",
              maxHeight: "350px",
              "&::-webkit-scrollbar": {
                display: "none"
              },

              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {SEEDED_INCIDENTS.map((incident) => (
              <Box
                key={incident.id}
                sx={{
                  width: "548px",
                  height: "75.2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  borderRadius: "6px",
                  padding: "4px 12px 4px 4px"
                }}
              >
                {/* Camera snapshot */}
                <Box sx={{ width: "126px", height: "72px" }}>
                  <img
                    src={incident.thumbnailUrl}
                    alt="snapshot"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "297px",
                    height: "67px",
                    justifyContent: "space-between"
                  }}
                >
                  {/* Incident icon */}
                  <Box
                    display={"flex"}
                    sx={{ width: "297px", height: "16px", gap: "4px" }}
                  >
                    <img src={incident.icon} alt="incident-icon" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#FFFFFF",
                        fontWeight: 500
                      }}
                    >
                      {incident.type}
                    </Typography>
                  </Box>

                  {/* Incident details */}
                  <Box
                    sx={{ width: "297px", height: "29px", gap: "5px", mt: 2 }}
                  >
                    <Box
                      display={"flex"}
                      sx={{ width: "auto", height: "12px", gap: "4px" }}
                    >
                      <img src={incident.cameraImg} alt="camera" />
                      <Typography sx={{ fontSize: "12px", color: "#B0B0B0" }}>
                        {incident.camera}
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      sx={{ width: "297px", height: "12px", gap: "7px", mt: 1 }}
                    >
                      <AccessTimeSharpIcon
                        sx={{ width: "9px", height: "10px" }}
                      />
                      <Typography
                        sx={{
                          width: "137px",
                          height: "12px",
                          fontFamily: "inter",
                          fontWeight: 700,
                          lineHeight: "100%",
                          fontSize: "10px",
                          color: "#FFFFFF"
                        }}
                      >
                        {formatIncidentTime(incident.tsStart, incident.tsEnd)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    width: "83px",
                    height: "36px",
                    fontSize: "10px",
                    padding: "10px 12px 10px 12px"
                  }}
                >
                  <Button sx={{ color: "#FFCC00", textTransform: "none" }}>
                    Resolve
                    <ChevronRightIcon />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraPanel;
