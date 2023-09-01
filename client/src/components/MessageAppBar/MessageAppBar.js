import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function MessageAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: "#202c33", height: "64px" }}>
        <Grid container>
          <Grid
            item
            ml={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IconButton>
              <Avatar />
            </IconButton>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={1}
            lg={9.5}
          >
            <Grid container flexDirection={"column"} textAlign={"start"}>
              <Grid item>
                <Typography>Antony Thomas</Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={"12px"}>Last seen at 2:59 Pm</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IconButton color="inherit">
              <VideocamIcon />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default MessageAppBar;
