import React,{useState}from "react";
import { Fab, AppBar, Button, TextField, List, ListItem, ListItemIcon, ListItemText,ListSubheader,Modal} from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Modalc = (props) => {
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
  const openModal = () => {
    setNewmodal(!newmodal);
  };
  const insideModal = (
    <div style={styleModal}>
      <h2 style={{ paddingLeft: "2%" }}>Please Edit your pet</h2>
      <TextField
        style={styleText}
        name="name"
        id="outlined-name"
        label="Name"
       
      />
      <TextField
        style={styleText}
        name="age"
        id="outlined-name"
        label="Age"
   
      />
      <TextField
        style={styleText}
        name="colour"
        id="outlined-name"
        label="Specie"
    
      />
      <Button >
        <Fab color="warning" aria-label="add">
          <CheckCircleIcon />
        </Fab>
      </Button>
    </div>
  );

  return (
    <Modal open={props.state} onClose={openModal}>
      {insideModal}
    </Modal>
  );
};

export default Modalc;
