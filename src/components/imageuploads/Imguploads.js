import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Input } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "75vh",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  progessBar: {
    marginTop: "15px",
    textAlign: "center",
    borderRadius: "15px",
    background: "blue",
    color: "white",
  },
  btn: {
    width: "250px",
  },
  imgsize: {
    background: "blue",
    width: "300px",
    Height: "350px",
    borderRadius: "25px",
    objectFit: "conatain",
  },
}));

function Imguploads() {
  const classes = useStyles();

  const [file, setFile] = useState("");
  const [getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0);
  const el = useRef();
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  };

  const uploadFile = () => {
    const formData = new FormData();
    setFile("");

    formData.append("file", file);
    axios
      .post("https://ak-sms-api.herokuapp.com/api/v1/photo", formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgess(progress);
        },
      })
      .then((res) => {
        console.log(res);
        getFile({
          name: res.data.name,
          path: "url here" + res.data.path,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.wrapper}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Image Uploads</Typography>
          <form>
            <div className={classes.form} noValidate>
              <Input
                type="file"
                ref={el}
                onChange={handleChange}
                fullWidth
                variant="filled"
              />
            </div>
            <div className={classes.progessBar} style={{ width: progress }}>
              {progress}
            </div>
            <Button
              onClick={uploadFile}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              upload
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Imguploads;
