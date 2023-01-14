import { useState, useRef, useEffect } from "react";
import Accordion from "./accordion";
import { handleGetTodos, handleCreateTodos,handleCreateSubTodos } from "./services/todo";

function App() {
  const [todo, setTodo] = useState("");
  const [showAccordion, setShowAccordion] = useState(false);
  const [todos, setTodos] = useState([]);
  const [subTask, setSubTask] = useState("");
  const [subTaskId, setSubTaskId] = useState("");
  const [reload, setReload] = useState(false)
  const [todoChecked, setTodoChecked] = useState(false)

  let form = useRef(null);
  function validate() {
    form.current.reportValidity();
  }
  useEffect(() => {
    handleGetTodos().then(data => {
      setTodos(data)
      setShowAccordion(true)
      setReload(false)
    })
    
  },[reload])
  function handleSubmit(e) {
    e.preventDefault();
    validate();
    if (validate !== "") {
      handleCreateTodos(todo).then(res => {
        window.location.reload()
      })
      setShowAccordion(true);
    } else {
      setShowAccordion(false);
    }
  }

  function toggle(value){
    return !value;
  }

  function handleCheckSubtask(e,toggle){
    e.preventDefault();
    const { name, value } = e.target;
     console.log(name)
     setTodoChecked(toggle);
  }
  

  function handleSubCheckChange(e){
    e.preventDefault();
    const { name, value } = e.target;
     console.log(name)
    //  setSubTaskId(name);
  }

 function handleChange(e) {
  e.preventDefault();
    const { name, value } = e.target;
     setSubTask(value);
     setSubTaskId(name);
  }

  function handleSubtask(e) {
    e.preventDefault();
    
    validate();
    if (validate !== "") {
      handleCreateSubTodos(subTask,subTaskId).then(res => {
        setReload(true)
      })
      setShowAccordion(true);
    } else {
      setShowAccordion(false);
    }
  }

  return (
    <div className="flex justify-center pt-10 min-h-screen  ">
      <div>
        <h1 className="font-bold text-2xl text-center py-6">Todo App</h1>
        <form ref={form} onSubmit={handleSubmit} action="" className="pb-6">
          <input
            className="border border-gray-600 rounded-md p-3 m-2 outline-none"
            type="text"
            placeholder="Add TODO task "
            value={todo}
            name={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-800 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:shadow-lg hover:shadow-gray-700 text-white rounded-md p-3 m-2"
          >
            {" "}
            New List
          </button>
        </form>
        
        {showAccordion === true ? <div><Accordion todos = {todos} subTask = {subTask} setSubTask = {setSubTask} handleSubtask = {handleSubtask} handleChange = {handleChange} handleSubCheckChange = {handleSubCheckChange} handleCheckSubtask={handleCheckSubtask} todoChecked={todoChecked} toggle={toggle} setTodoChecked={setTodoChecked}/></div> : null}
      </div>
    </div>
  );
}

export default App;
