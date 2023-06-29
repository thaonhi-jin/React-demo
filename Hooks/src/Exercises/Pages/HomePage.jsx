import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FaFolderOpen } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(true);
  const [openState, setOpenState] = useState(false);
  const [openEffect, setOpenEffect] = useState(false);
  const [openRef, setOpenRef] = useState(false);
  const [openReducer, setOpenReducer] = useState(false);
  const [openContext, setOpenContext] = useState(false);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to my exercise page</h1>
      {openMenu ? (
        <IconButton
          style={{ color: "black" }}
          aria-label="menu"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <List
          sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Hook Exercises
              <IconButton
                style={{
                  marginLeft: "80px",
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <MdOutlineClear />
              </IconButton>
            </ListSubheader>
          }
        >
          {/* useState Exercises */}
          <ListItemButton onClick={() => setOpenState(!openState)}>
            <FaFolderOpen style={{ color: "plum", marginRight: "10px" }} />
            <ListItemText primary="useState" />
            {openState ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openState} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/usestate/character-counter" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="Character Counter" />
                </ListItemButton>
              </NavLink>

              <NavLink to="/usestate/counter" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="Counter" />
                </ListItemButton>
              </NavLink>

              <NavLink to="/usestate/display-list" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="Display List" />
                </ListItemButton>
              </NavLink>

              <NavLink to="/usestate/input" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="Different Inputs" />
                </ListItemButton>
              </NavLink>

              <NavLink to="/usestate/random-gift" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="Random Gifts" />
                </ListItemButton>
              </NavLink>

              <NavLink to="/usestate/to-do-app" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="To do App" />
                </ListItemButton>
              </NavLink>

              <NavLink to="/usestate/toggle" className="navlink">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon style={{ color: "plum" }}>
                    <AiFillAppstore />
                  </ListItemIcon>
                  <ListItemText primary="Simple Toggle" />
                </ListItemButton>
              </NavLink>
            </List>
          </Collapse>

          {/* useEffect Exercises */}
          <ListItemButton onClick={() => setOpenEffect(!openEffect)}>
            <FaFolderOpen style={{ color: "green", marginRight: "10px" }} />
            <ListItemText primary="useEffect" />
            {openEffect ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openEffect} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "green" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Count Down" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "green" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Fetch Data" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "green" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Update Title App" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "green" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Validate Input" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* useRef Exercises */}
          <ListItemButton onClick={() => setOpenRef(!openRef)}>
            <FaFolderOpen style={{ color: "goldenrod", marginRight: "10px" }} />
            <ListItemText primary="useRef" />
            {openRef ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openRef} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "goldenrod" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="AutoFocus" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "goldenrod" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Count Down" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "goldenrod" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Track State" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* useReducer Exercises */}
          <ListItemButton onClick={() => setOpenReducer(!openReducer)}>
            <FaFolderOpen style={{ color: "orangered", marginRight: "10px" }} />
            <ListItemText primary="useReducer" />
            {openReducer ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openReducer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "orangered" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Counter" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "orangered" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Handle Form" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* useContext Exercises */}
          <ListItemButton onClick={() => setOpenContext(!openContext)}>
            <FaFolderOpen style={{ color: "royalblue", marginRight: "10px" }} />
            <ListItemText primary="useContext" />
            {openContext ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openContext} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon style={{ color: "royalblue" }}>
                  <AiFillAppstore />
                </ListItemIcon>
                <ListItemText primary="Toggle theme" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      )}
    </div>
  );
}
