import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GroupsIcon from "@mui/icons-material/Groups";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import TryIcon from "@mui/icons-material/Try";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

const settings = ["New Group", "New Community", "Starred Messages", "Selected Chats", "Settings", "Logout"];

function CustomAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: "#202c33" }}>
        <Toolbar>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <IconButton>
                <Avatar alt="user_profile" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Grid>
            <Grid item justifyContent={"flex-end"}>
              <IconButton color="inherit">
                <GroupsIcon />
              </IconButton>
              <IconButton color="inherit">
                <RadioButtonCheckedIcon />
              </IconButton>
              <IconButton color="inherit">
                <TryIcon />
              </IconButton>
              <IconButton color="inherit" onClick={handleOpenUserMenu}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign={"center"}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomAppBar;
