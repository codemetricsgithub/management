import { Fab, makeStyles, Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "../assets/card.css";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  edit: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(3),
  },
  editIcon: {
    backgroundColor: "#3498DB",
  },
  delete: {
    position: "absolute",
    backgroundColor: "#7F8C8D",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const AuthNotice = () => {
  const classes = useStyles();

  const [notice, setNotice] = useState([]);
  const getNotice = async () => {
    const response = await fetch(
      "https://ak-sms-api.herokuapp.com/api/v1/notice"
    );

    // Converting it to the json format
    const data = await response.json();

    setNotice(data.data.reverse());
  };

  useEffect(() => {
    getNotice();
  }, []);

  const confirmDelete = async (id) => {
    if (window.confirm("You want to delete ?")) {
      await axios.delete(
        `https://ak-sms-api.herokuapp.com/api/v1/notice/${id}`
      );
      getNotice();
    }
  };

  return (
    <>
      <div className=" container-fluid mt-5">
        <div className=" row text-center">
          {notice.map((value) => {
            return (
              <div className=" col-md-4 " key={value._id}>
                <div className=" card p-1">
                  <div className=" d-flex align-items-center">
                    <div className=" ml-3 w-100">
                      <h4 className=" mb-0 mt-0 textLeft title">
                        {value.title}
                      </h4>
                      <span className=" textLeft message">{value.message}</span>
                      <span
                        className=" textLeft message"
                        style={{ display: "none" }}
                      >
                        {value.startDate}
                      </span>
                      <span
                        className=" textLeft message"
                        style={{ display: "none" }}
                      >
                        {value.endDate}
                      </span>
                    </div>
                    <Link
                      to={`/edit-notice/${value._id}`}
                      className={classes.edit}
                      style={{ border: "none", background: "none" }}
                    >
                      <Tooltip title="Edit">
                        <Fab
                          size="small"
                          color="primary"
                          className={classes.editIcon}
                        >
                          <EditIcon />
                        </Fab>
                      </Tooltip>
                    </Link>

                    <Tooltip title="Delete">
                      <Fab
                        size="small"
                        color="secondary"
                        onClick={() => confirmDelete(value._id)}
                        className={classes.delete}
                        style={{ border: "none" }}
                      >
                        <DeleteIcon />
                      </Fab>
                    </Tooltip>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AuthNotice;
