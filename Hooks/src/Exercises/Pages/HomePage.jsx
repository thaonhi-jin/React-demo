import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FaFolderOpen } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export default function HomePage() {
  const [openState, setOpenState] = useState(true);
  const [openEffect, setOpenEffect] = useState(true);
  const [openRef, setOpenRef] = useState(true);
  const [openReducer, setOpenReducer] = useState(true);
  const [openContext, setOpenContext] = useState(true);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to my exercises</h1>

      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ width: "80%", margin: "0px auto" }}
      >
        {/* useState Exercises */}
        <Grid item xs={4}>
          <Box className="item">
            <ListItemButton onClick={() => setOpenState(!openState)}>
              <FaFolderOpen style={{ color: "plum", marginRight: "10px" }} />
              <ListItemText primary="useState" />
              {/* {openState ? <ExpandLess /> : <ExpandMore />} */}
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
          </Box>
        </Grid>

        {/* useEffect Exercises */}
        <Grid item xs={4}>
          <Box className="item">
            <ListItemButton onClick={() => setOpenEffect(!openEffect)}>
              <FaFolderOpen style={{ color: "green", marginRight: "10px" }} />
              <ListItemText primary="useEffect" />
              {/* {openEffect ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>

            <Collapse in={openEffect} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/useeffect/count-down" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "green" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Count Down" />
                  </ListItemButton>
                </NavLink>

                <NavLink to="/useeffect/fetching" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "green" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Fetch Data" />
                  </ListItemButton>
                </NavLink>

                <NavLink to="/useeffect/update-title" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "green" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Update Title App" />
                  </ListItemButton>
                </NavLink>

                <NavLink to="/useeffect/validation" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "green" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Validate Input" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </Box>
        </Grid>

        {/* useRef Exercises */}
        <Grid item xs={4}>
          <Box className="item">
            <ListItemButton onClick={() => setOpenRef(!openRef)}>
              <FaFolderOpen
                style={{ color: "goldenrod", marginRight: "10px" }}
              />
              <ListItemText primary="useRef" />
              {/* {openRef ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>

            <Collapse in={openRef} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/useref/autofocus" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "goldenrod" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="AutoFocus" />
                  </ListItemButton>
                </NavLink>

                <NavLink to="/useref/count-down-ref" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "goldenrod" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Count Down" />
                  </ListItemButton>
                </NavLink>

                <NavLink to="/useref/track-state" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "goldenrod" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Track State" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </Box>
        </Grid>

        {/* useReducer Exercises */}
        <Grid item xs={4}>
          <Box className="item">
            <ListItemButton onClick={() => setOpenReducer(!openReducer)}>
              <FaFolderOpen
                style={{ color: "orangered", marginRight: "10px" }}
              />
              <ListItemText primary="useReducer" />
              {/* {openReducer ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>

            <Collapse in={openReducer} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/usereducer/counter-reducer" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "orangered" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Counter" />
                  </ListItemButton>
                </NavLink>

                <NavLink to="/usereducer/handle-form" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "orangered" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Handle Form" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </Box>
        </Grid>

        {/* useContext Exercises */}
        <Grid item xs={4}>
          <Box className="item">
            <ListItemButton onClick={() => setOpenContext(!openContext)}>
              <FaFolderOpen
                style={{ color: "royalblue", marginRight: "10px" }}
              />
              <ListItemText primary="useContext" />
              {/* {openContext ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>

            <Collapse in={openContext} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/usecontext/toggle-theme" className="navlink">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "royalblue" }}>
                      <AiFillAppstore />
                    </ListItemIcon>
                    <ListItemText primary="Toggle theme" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
