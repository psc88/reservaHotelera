import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import logo from "../imagenes/logoHotel.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const [tablet, setTablet] = useState(true);
  const [draweropen, setDraweropen]=useState(false);
  const classes = useStyle();

  const displayTablet = () => {
    const handleDrawerOpen = () => {
        setDraweropen(true)
    }
    const handleDrawerClose = () => {
        setDraweropen(false)
    }
    const headersData = ["My account", "Previous bookings", "Log out"]
    const getDrawerChoices = () => {
        return headersData.map((data) => {
            return (
                <List>
                    <ListItem>{data}</ListItem>
                </List>
            )
        })
    }

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "#ccc",
            "aria-label": "menu",
            "arial-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer {...{
            anchor: "left",
            open: draweropen,
            onClose: handleDrawerClose,
        }}>
            <div>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <img src={logo} className={classes.logo} />
      <div className={classes.center}>
        <InputBase
          fullWidth
          placeholder="Search here ..."
          inputProps={{ className: classes.input }}
        />
        <SearchIcon />
      </div>
      <div className={classes.right}>
        <Typography>Sign in</Typography>
        <Avatar className={classes.avatar} />
      </div>
    </Toolbar>
  );

  return (
    <AppBar className={classes.root}>
      {tablet ? displayTablet() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "140px",
    margin: theme.spacing(2),
    objectFit: "contain",
    borderRadius: "50px",
    boxShadow: "5px 5px rgba(0, 0, 0, 0.5)",
    opacity: "0.7",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    minWidth: "300px",
    borderRadius: "999px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  input: {
    fontSize: "2rem",
    padding: theme.spacing(1, 5, 1, 5),
  },
  right: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default Header;
