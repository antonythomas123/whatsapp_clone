import React from "react";
import MessageAppBar from "../MessageAppBar/MessageAppBar";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import MicIcon from "@mui/icons-material/Mic";

const backgroundImage =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";

const useStyles = makeStyles((theme) => ({
  searchField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
    },
    "& .MuiOutlinedInput-input": {
      padding: "0.5em", // Adjust padding as needed
      height: "2.47em", // Adjust the height as needed
    },
    "& .MuiInputLabel-root": {
      fontSize: 10, // Adjust the font size of the placeholder
    },
  },
  icon: {
    cursor: "pointer", // Add cursor pointer for the icon
  },
}));

function Messaging() {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundImage: `url(${backgroundImage})`, height: "100%" }}>
      <Grid container>
        <Grid item lg={12}>
          <MessageAppBar />
        </Grid>
        <Grid item lg={12} height={"85vh"}>
          {/* Message Content */}
          <Grid container mt={2}>
            {/* Message from Sender */}
            <Grid
              item
              lg={6}
              sx={{
                background: "#ffffff",
                borderRadius: "10px",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              <Grid container direction="column">
                <Grid item style={{ textAlign: "start" }}>
                  <Typography pl={1} pt={1}>
                    This is a message from the sender
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: "auto",
                    textAlign: "right",
                    marginRight: "10px",
                  }}
                >
                  <Typography fontSize="12px">
                    {new Date().toUTCString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Message from Receiver */}
            <Grid
              item
              lg={6}
              sx={{
                background: "#dcf8c6",
                borderRadius: "10px",
                marginBottom: "10px",
                marginLeft: "auto",
                marginRight: "10px",
              }}
            >
              <Grid container direction="column">
                <Grid item style={{ textAlign: "start" }}>
                  <Typography pl={1} pt={1}>
                    This is a message from the receiver
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: "auto",
                    textAlign: "right",
                    marginRight: "10px",
                  }}
                >
                  <Typography fontSize="12px">
                    {new Date().toUTCString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          {/* Message Input */}
          <Grid
            container
            sx={{
              background: "#ffffff",
              height: "60px",
              alignItems: "center",
              paddingLeft: "10px",
              paddingRight: "10px",
              flexShrink: 0,
              position: "sticky",
              bottom: "0",
              zIndex: "999",
            }}
          >
            <Grid item>
              <IconButton>
                <MoodIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item lg={10}>
              <TextField
                className={classes.searchField}
                variant="outlined"
                placeholder="Search or start a new chat"
                fullWidth
                inputProps={{
                  style: { fontSize: "0.8rem" },
                }}
              />
            </Grid>
            <Grid item ml={5} display="flex">
              <MicIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Messaging;
