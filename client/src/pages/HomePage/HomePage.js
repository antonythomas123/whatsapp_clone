import React, { useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatCard from "../../components/ChatCard/ChatCard";
import Messaging from "../../components/Messaging/Messaging";

const useStyles = makeStyles((theme) => ({
  searchField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
    },
    "& .MuiOutlinedInput-input": {
      padding: "0.5em", // Adjust padding as needed
      height: "1.47em", // Adjust the height as needed
    },
    "& .MuiInputLabel-root": {
      fontSize: 10, // Adjust the font size of the placeholder
    },
  },
  icon: {
    cursor: "pointer", // Add cursor pointer for the icon
  },
}));

function HomePage() {
  const classes = useStyles();

  const [isInputFocused, setInputFocused] = useState(false);

  const toggleInputFocus = () => {
    setInputFocused(!isInputFocused);
  };

  return (
    <Box>
      <Grid container>
        {/* Left */}
        <Grid item lg={4}>
          <Grid container>
            <Grid item lg={12}>
              <CustomAppBar />
            </Grid>
            <Grid
              item
              lg={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item lg={12} mt={1}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid item sx={{ width: "90%" }}>
                    <TextField
                      className={classes.searchField}
                      variant="outlined"
                      placeholder="Search or start a new chat"
                      fullWidth
                      onClick={toggleInputFocus}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {isInputFocused ? (
                              <ArrowBackIcon
                                className={classes.icon}
                                fontSize="small"
                              />
                            ) : (
                              <SearchIcon
                                className={classes.icon}
                                fontSize="small"
                              />
                            )}
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        style: { fontSize: "0.8rem" },
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <FilterListIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              
            </Grid>
          </Grid>
        </Grid>

        {/* Right */}
        <Grid item lg={8}>
          <Messaging/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
