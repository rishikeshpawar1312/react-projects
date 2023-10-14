import React,{useState}  from 'react'
import  {useEffect} from 'react'
import  Card from './Card'
import  CreateTask from '../modals/CreateTask'

 const TodoLists=()=> {
   const [modal, setModal] = useState(false);
   const [taskList, setTaskList] = useState([])

  useEffect(() => {
     let arr=localStorage.getItem("taskList")
    if(arr){
      let obj=JSON.parse(arr)
      setTaskList(obj)
    }
   }, [])

   const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}
   

   const toggle=()=>{
      setModal(!modal);
   }

   const saveTask=(taskobj)=>{
    let tempList=taskList;
     tempList.push(taskobj)
     const timestamp = new Date().toISOString(); // Get the current timestamp
     taskobj.createdOn = timestamp;    
     localStorage.setItem("taskList",JSON.stringify(tempList))
     setTaskList(tempList)
     setModal(false)
   }

const updateListArray=(obj,index)=>{
       let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        
        setTaskList(tempList)
        window.location.reload()

}
  return (
     <>
     <div className="header text-center"> 
     <h3>TODO-LISTS</h3>
     <button onClick={()=>setModal(true) }type="button" class="btn btn-light"><span class="bi bi-plus"></span></button> 
     </div>

     <div className="task-container">
     {taskList&&taskList.map((obj,index)=>
     
     <Card taskobj={obj}   index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
      
       </div>
       <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
     
     </>
  )
}

export default TodoLists;