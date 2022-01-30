import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import SalesForce from "../../images/SalesForce";
import Youtube from "../../images/Youtube";

const ExpertiseBlock = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        textTransform="uppercase"
        className={classes.text}
      >
        We have strong expertise across
      </Typography>
      <div className={classes.iconWrap}>
        <Youtube />
        <Youtube />
        <Youtube />
        <Youtube />
        <Youtube />
      </div>
    </div>
  );
};

export default ExpertiseBlock;
