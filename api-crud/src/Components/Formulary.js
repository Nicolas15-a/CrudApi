import React from "react";
import Styles from "./Styles.css";
import { Fab, AppBar, Button, TextField, Modal } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    border:'2px solid #000',
    top:'50%',
    left:'50%',
    

  },
}));
const Formulary = () => {
  const [newmodal, setNewmodal] = useState(false);
  const styles = useStyles();

  const openModal = () => {
    setNewmodal(!newmodal);
  };
  const insideModal=(
    <div className={styles.modal}>
      <h1>Crud</h1>
      <h2>Please Make a Pet</h2>
      <TextField name="name" id="outlined-name" label="Name" />
      <TextField name="age" id="outlined-name" label="Age" />
      <TextField name="color" id="outlined-name" label="Color" />
      <Button>
        <Fab color="warning" aria-label="add">
          <CheckCircleIcon />
        </Fab>
      </Button>
    </div>)

  return (
    <div className={styles.modal}>
      <section>
        <AppBar id="appbar">Farmer Pets</AppBar>
      </section>
      <h1>Crud</h1>
      <Button onClick={()=>openModal()}>
        <Fab color="warning" aria-label="add">
          <AddIcon />
        </Fab>
      </Button>

      <Modal open={newmodal} onClose={openModal}>
       {insideModal}
      </Modal>
    </div>
  );
};
export default Formulary;
