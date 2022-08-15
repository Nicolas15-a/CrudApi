import React, { Fragment } from "react";
import Styles from "./Styles.css";
import {List, ListItem, ListItemIcon, ListItemText,ListSubheader,Fab,Button,TextField} from '@mui/material/';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import axios from 'axios'
import { useState,useEffect} from 'react';

const api='https://crudcrud.com/api/5396c95be37749eb97afca224ff6da83/unicorns';
const View = () => {

  const [anwswer, setAnswer] = useState(0);
  const [data, setData] = useState([]);

  const peticion = async () => {
    await axios.get(api).then((response) => {
        setData(response.data)
    });
  };
  useEffect( () => {
     peticion();
  }, []);

 return (
   <div>
     <List>
       <ListSubheader>Pets</ListSubheader>
       {data.map((view) => (
         <List>
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
               <ColorLensIcon />
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