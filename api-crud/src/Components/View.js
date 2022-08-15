import React, { Fragment } from "react";
import Styles from "./Styles.css";
import {List, ListItem, ListItemIcon, ListItemText,ListSubheader,Fab,Button,TextField} from '@mui/material/';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import axios from 'axios'
import { useState,useEffect} from 'react';

const api='https://crudcrud.com/api/ad1c0689211048efa590596711ceb0a8/unicorns';
const View = () => {


  const [data, setData] = useState([]);

  const peticion = async() => {
    await axios.get(api).then((response) => {
        setData(response.data)
    });
  };
  useEffect( () => {
     peticion();
  }, []);

 return (
   <div>
     <List >
       <ListSubheader>Pets</ListSubheader>
       {data.map((view) => (
         <List key={view.id}>
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
               <FingerprintIcon/>
             </ListItemIcon>
             <ListItemText>{view.colour}</ListItemText>
           </ListItem>

           {/* Buttons with Icons */}
           <Button>
             <Fab variant="outline" color="info" aria-label="add">
               <DeleteIcon />
             </Fab>
           </Button>

           <Button>
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