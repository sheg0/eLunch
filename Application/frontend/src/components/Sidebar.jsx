import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EuroIcon from "@mui/icons-material/Euro";
import PeopleIcon from "@mui/icons-material/People";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import InfoIcon from "@mui/icons-material/Info";
//import SteinbeisLogo from "../images/Logo_Steinbeis_EST_white.png";
import Profile from "./Profile/Profile";

import { useNavigate } from "react-router-dom";

const drawerWidth = 250;

export default function ClippedDrawer({ children }) {
  const navigate = useNavigate();

  function SwitchPath(path) {
    console.log(path);
    switch (path) {
      case "Speiseplan":
        return navigate("/Calendar");
      case "Gerichte":
        return navigate("/List");
      case "Einkaufszettel":
        return navigate("/");
      case "Events":
        return navigate("/Events");
      case 5:
        return navigate("/");
      case 6:
        return navigate("/");
      case "Infos":
        return navigate("/Info");
      default:
        return navigate("/");
    }
  }

  const listItems = [
    "Speiseplan",
    "Gerichte",
    "Einkaufszettel",
    "Events",
    "Mitarbeiter",
    "Statistik",
    "Infos",
  ];

  const iconMap = {
    Speiseplan: <MenuBookIcon />,
    Gerichte: <LocalDiningIcon />,
    Einkaufszettel: <ShoppingCartIcon />,
    Events: <EuroIcon />,
    Mitarbeiter: <PeopleIcon />,
    Statistik: <StackedLineChartIcon />,
    Infos: <InfoIcon />,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#043c5f" }}
      ></AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            fontSize: "40px",
            fontFamily: "Segoe UI",
          },
        }}
      >
        <Profile />
        {/*<Toolbar />*/}

        <Box
          sx={{
            overflow: "auto",
            // beide farben aber super wir können uns nicht entscheiden...
            //background: "linear-gradient(0deg, #625c80, #043c5f)",
            //background: "linear-gradient(0deg, #696498, #043c5f)",
            background: "linear-gradient(0deg, #5A293D, #043c5f)",
            height: "100vh",
          }}
        >
          <List sx={{ color: "white" }}>
            {listItems.map((item) => {
              return (
                <ListItemButton
                  onClick={() => SwitchPath(item)}
                  key={item}
                  sx={{
                    fontFamily: "Segoe UI",
                    fontSize: "23px",
                    lineHeight: "4",
                    fontWeight: "400",
                  }}
                >
                  <ListItemIcon sx={{ color: "white", position: "absolute" }}>
                    {iconMap[item]}
                  </ListItemIcon>
                  <ListItemText />
                  {item}
                </ListItemButton>
              );
            })}
          </List>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: "15px",
              color: "white",
              bottom: "0",
              left: "0",
              right: "0",
              position: "absolute",
              padding: "15px",
            }}
          >
            <a href={"./Info"}>Impressum</a> | Druckansicht | ICAL
          </Typography>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
