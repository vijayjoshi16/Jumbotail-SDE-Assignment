import { Grid, Hidden, SwipeableDrawer } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarContainer,
  MenuButton,
  MenuDash,
  NameSpan,
} from "./Navbar.styles.js";
import NavbarOptions from "./NavbarOptions/NavbarOptions.jsx";
import { DrawerContainer } from "./NavbarOptions/NavbarOptions.styled.jsx";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <NavbarContainer container>
      <Grid xs={12} sm={12} md={6} lg={8} onClick={() => navigate("/")}>
        <NameSpan>BOOK SEARCH API</NameSpan>
      </Grid>
      <Hidden smDown={true}>
        <Grid item md={6} lg={4}>
          <NavbarOptions isSmall={false} />
        </Grid>
      </Hidden>
      <Hidden mdUp={true}>
        <MenuButton
          onClick={() => {
            setDrawerOpen(true);
          }}
        >
          <MenuDash />
          <MenuDash />
          <MenuDash />
        </MenuButton>
      </Hidden>
      <SwipeableDrawer
        open={drawerOpen}
        onOpen={() => {
          setDrawerOpen(true);
        }}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <DrawerContainer>
          <NavbarOptions isSmall={true} />
        </DrawerContainer>
      </SwipeableDrawer>
    </NavbarContainer>
  );
};

export default Navbar;
