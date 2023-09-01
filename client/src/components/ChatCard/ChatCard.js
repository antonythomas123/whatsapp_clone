import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

function ChatCard() {
  return (
    <Grid
      container
      sx={{ width: "100%", height: "60px" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/*Avatar */}
      <Grid
        item
        width={"10%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Avatar />
      </Grid>
      {/*Message */}
      <Grid
        item
        width={"80%"}
        height={"100%"}
        borderBottom={"1px solid #222"}
        display={"flex"}
      >
        <Grid container ml={1} flexDirection={"column"} textAlign={"start"} justifyContent={'center'} > 
          <Grid item>
            <Typography>Antony Thomas</Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={"13px"}>Hii, How are youu!!</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          width={"20%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography fontSize={"12px"}>11:59 Pm</Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ChatCard;
