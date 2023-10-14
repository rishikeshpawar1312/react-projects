import React,{useState} from 'react'
import EditTask from '../modals/EditTask'
 

const   Card =({taskobj,index,deleteTask,updateListArray})=> {
const [modal,  setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#87CEEB",
            secondaryColor : "#F0FFFF"
        },
        {
            primaryColor : "#98FB98",
            secondaryColor : "#E0F8E0"
        },
        {
            primaryColor : "#FF6B6B",
            secondaryColor : "#FFE4E1"
        },
        {
            primaryColor : "#708090",
            secondaryColor : "#A9A9A9"
        },
        {
            primaryColor : "#E6E6FA",
            secondaryColor : "#D8BFD8"
        }
    ]


    const toggle=()=>{
        setModal(!modal);
        }

     const handleDelete=()=>{
        deleteTask(index);

     }
      
  const updateTask = (obj)=>{
    updateListArray(obj,index)
  }


  return (
    <div class = "card-wrapper mr-5">
    <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
    <div class = "task-holder">
        <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskobj.Name}</span>
        <p className = "mt-3 " >{taskobj.Description}</p>
         <div className="date"> 
         <p>Created on:</p>
         <p> {new Date(taskobj.createdOn).toLocaleString()}</p>
        </div>
        
        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <i class = "far fa-edit mr-3 p-2" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
            <i class="fas fa-trash-alt p-2" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
        </div>
       

 </div>
 <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskobj = {taskobj}/>
 </div>
  )
};

export default Card;