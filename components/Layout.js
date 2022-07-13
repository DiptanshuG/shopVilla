import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
    const classes=useStyles();
  return (
    <div>
      <Head>
        <title>Next Shopvilla</title>
      </Head>
      <AppBar position="statice" className={classes.navbar}>
        <Toolbar>
          <Typography>ShopVilla</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main} >{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserve. ShopVilla</Typography>
      </footer>
    </div>
  );
};

export default Layout;
