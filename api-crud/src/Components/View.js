import React, { Fragment } from "react";
import Styles from "./Styles.css";
import {List, ListItem, ListItemIcon, ListItemText,ListSubheader,Fab,Button,TextField,Modal} from '@mui/material/';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import axios from 'axios'
import { useState,useEffect} from 'react';


const api='https://crudcrud.com/api/aea87f22dbca4223b45a24ca48a5d964/unicorns/';
const View = (props) => {

  //This state is for save and preview data (this is for Get)
  const [data, setData] = useState([]);

  const peticion = async() => {
    await axios.get(api).then((response) => {
        setData(response.data)
    });
  };
  useEffect( () => {
     peticion();
  }, []);

  const peticionPut=async()=>{
    await axios.put(api+valuetext.id, valuetext)
    .then(response=>{
      var newData=data;
      newData.map(view=>{
        if(valuetext.id===view._id){
          view._id=valuetext.id;
          view.name=valuetext.name;
          view.age=valuetext.age;
          view.colour=valuetext.colour;
         
        }
      })
      setData(newData);
      openModal();
    })
  }
  const peticionDelete=async()=>{
    await axios.delete(api+valuetext.id)
    .then(response=>{
      setData(data.filter(view=>view._id!==valuetext.id));
      
    })

  }


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
    position: "absolute",
    marginTop: "10%",
    marginRight: "2%",
  };
  const styleText={
    paddingTop:"5%",
    paddingBottom:"3%", 
    paddingLeft:"2%"
    
  }
  
  const [newmodal, setNewmodal] = useState(false);
  const [valuetext,setValuetext]=useState({id:'',name:'',age:'',colour:'',})

  console.log(valuetext)
    
  
  const openModal = () => {
    setNewmodal(!newmodal);
  };
  const handlesubmit=(e)=>{
    const {name,value}=e.target;
    setValuetext(prevState=>({
      ...prevState,
      [name]:value,
    }))
   
  }

 
  const editModal = (
    <div style={styleModal}>
      <h2 style={{paddingLeft:"2%"}}>Please Edit your pet</h2>
      <TextField style={styleText} name="name" id="outlined-name" label="Name" onChange={handlesubmit}/>
      <TextField style={styleText} name="age" id="outlined-name" label="Age" onChange={handlesubmit}/>
      <TextField style={styleText}  name="colour" id="outlined-name" label="Specie" onChange={handlesubmit}/>

      <Button onClick={peticionPut} >
        <Fab color="warning" aria-label="add">
          <CheckCircleIcon />
        </Fab>
      </Button>
    </div>
  );


 return (
   <div>
     <List>
       <ListSubheader>Pets</ListSubheader>
       {data.map((view) => (
         <List >
           <ListItem>
             <ListItemIcon>
               <PetsIcon />
             </ListItemIcon>
             <ListItemText>{view.name}</ListItemText>
           </ListItem>
           <ListItem>
             <ListItemIcon>
               <EventIcon />
             </ListItemIcon>
             <ListItemText>{view.age}</ListItemText>
           </ListItem>
           <ListItem>
             <ListItemIcon>
               <FingerprintIcon />
             </ListItemIcon>
             <ListItemText>{view.colour}</ListItemText>
           </ListItem>

           <Modal open={newmodal} onClose={openModal}>
             {editModal}
           </Modal>

           {/* Buttons with Icons */}
           <Button onClick={peticionDelete}>
             <Fab variant="outline" color="info" aria-label="add">
               <DeleteIcon />
             </Fab>
           </Button>

           <Button onClick={()=>openModal()}>
             <Fab color="secondary" aria-label="add">
               <EditIcon />
             </Fab>
           </Button>
           
         </List>
       ))}
     </List>
   </div>
 );




   
};
export default View;