import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { indexStyles } from "./styles";
import { useTranslation } from "react-i18next";
export default function App(props) {
  
  // const img = require('../media/icon.png');
  const [t] = useTranslation();
  const classes = indexStyles.attach().classes;

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.appBarSpacer} />
      <Paper className={classes.container} >
        <Typography component="div">
          {/* <img src={img.default}></img> */}
          <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
            {t("title")}
          </Box>
        </Typography>
      </Paper>
    </Container>
  );
}