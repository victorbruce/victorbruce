import React from "react";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
      <footer>
        <Typography variant="body1">&copy; {new Date().getFullYear()}</Typography>
      </footer>
  );
};

export default Footer;
