import { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

// Import your CSS image
import backgroundImage from "./Asset/job.jpg";
//import jobImage from '../Assets/job.jpg';


const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
  leftPanel: {
    background: `url(${backgroundImage})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    width: "60vh", // Set the width to occupy half of the container
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });
    if (verified) {
      axios
        .post(apiList.login, loginDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Grid container>
      <Grid item xs={6} className={classes.leftPanel}></Grid>
      <Grid item xs={6}>
        <Paper elevation={3} className={classes.body}>
          <Grid container direction="column" spacing={4} alignItems="center">
            <Grid item>
              <Typography variant="h3" component="h2">
                Login
              </Typography>
            </Grid>
            <Grid item>
              <EmailInput
                label="Email"
                value={loginDetails.email}
                onChange={(event) =>
                  handleInput("email", event.target.value)
                }
                inputErrorHandler={inputErrorHandler}
                handleInputError={handleInputError}
                className={classes.inputBox}
              />
            </Grid>
            <Grid item>
              <PasswordInput
                label="Password"
                value={loginDetails.password}
                onChange={(event) =>
                  handleInput("password", event.target.value)
                }
                className={classes.inputBox}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleLogin()}
                className={classes.submitButton}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;