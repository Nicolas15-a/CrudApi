import React from "react";
import Styles from "./Styles.css";
import { Fab, AppBar, Button, TextField, List, ListItem, ListItemIcon, ListItemText,ListSubheader,Modal} from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import Modalc from "./Modalc";


import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

import { useState, useEffect } from "react";

const api='https://crudcrud.com/api/fb4413d1b2fd41db80e4c273ab7f4cd2/unicorns';
const styleModal={
  position: "absolute",
  width: 400,
  backgroundColor:"white",
  border: "2px solid #000",
  top: "50%",
  left: "50%",
  boxShadow:"55%",
  transform:"translate(-50%,-50%)"
}
const styleButton = {
 
};
const styleText={
  paddingTop:"5%",
  paddingBottom:"3%", 
  paddingLeft:"2%"
  
}
const Formulary = () => {

  const [data, setData] = useState([]);
  const [newmodal, setNewmodal] = useState(false);
  const [valuetext,setValuetext]=useState({ name:'',age:'',colour:'',})



  const handleChange=(e)=>{
    const {name,value}=e.target;
    setValuetext(prevState=>({
      ...prevState,
      [name]:value
    }))
    console.log(valuetext)
  }
  const openModal = () => {
    setNewmodal(!newmodal);
  };


  const peticionPost=async()=>{
   await axios.post(api,valuetext)
    .then(response=>{
      setData(data.concat(response.data))
      openModal()
    })
  }
  
  



  const insideModal = (
    <div style={styleModal}>
      <h2 style={{paddingLeft:"2%"}}>Please Make a Pet</h2>
      <TextField style={styleText} name="name" id="outlined-name" label="Name" onChange={handleChange}/>
      <TextField style={styleText} name="age" id="outlined-name" label="Age" onChange={handleChange}/>
      <TextField style={styleText}  name="colour" id="outlined-name" label="Specie" onChange={handleChange}/>
      <Button onClick={peticionPost}>
        <Fab color="warning" aria-label="add">
          <CheckCircleIcon />
        </Fab>
      </Button>
    </div>
  );


  return (
    
    <div className="containermodal">
      <section>
        <AppBar id="appbar">Farmer Pets</AppBar>
      </section>
      <h1>Push Add for Create a Pet</h1>
      <Button style={styleButton} onClick={() => openModal()}>
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
