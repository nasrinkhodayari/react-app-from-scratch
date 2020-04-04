import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { indexStyles } from "./styles";
import { useTranslation } from "react-i18next";
import api from './api';

export default function App(props) {

  const [t] = useTranslation();
  const classes = indexStyles.attach().classes;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.appBarSpacer} />
      <Paper className={classes.container} >
      </Paper>
    </Container>
  );
}