import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask({modal,toggle,updateTask,taskobj}) {
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const handlechange=(e)=>{
        const {name,value}=e.target 
        if(name==="taskName"){
            setTaskName(value)
        }
        else{
            setDescription(value)
        }
    }
   useEffect(()=>{
    setTaskName(taskobj.Name)
    setDescription(taskobj.Description)
   },[taskobj])
    
   const handleupdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskobj, // Copy existing properties
      Name: taskName,
      Description: description
    };
    updateTask(updatedTask);
  }
  
  return (
    <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle}>Update Task</ModalHeader>
    <ModalBody>
      <form>

        <div className="form-group">
            <label>Task Name</label>
         <input type='text' className='form-control'  onChange={handlechange}  value={taskName} name="taskName"/>
        </div>

        <div className="form-group pt-3">
        <label>Task Description</label>
          <textarea rows={5} className='form-control'   onChange={handlechange} value={description} name="description"/>
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleupdate}>
      Update
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default  EditTask ;