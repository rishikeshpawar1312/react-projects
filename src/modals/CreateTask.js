import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal,toggle,save}) {
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

    const savehandle=()=>{
       if(taskName.trim() !== '' || description.trim() !== ''){
      let taskobj = {
            Name: taskName,
            Description: description
          }
       save(taskobj)
        toggle(!modal)
        setTaskName('')
        setDescription('')
    }
    }
   
  return (
    <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle}>hello </ModalHeader>
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
      <Button color="primary" onClick={savehandle}>
     Create
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default CreateTask