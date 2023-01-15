import { useState, useRef, useEffect } from "react";
import Accordion from "./accordion";
import {
  handleGetTodos,
  handleCreateTodos,
  handleCreateSubTodos,
  handleMainCheckedBoxTodos,
  handleSubCheckedBoxTodos
} from "./services/todo";

function App() {
  const [todo, setTodo] = useState("");
  const [showAccordion, setShowAccordion] = useState(false);
  const [todos, setTodos] = useState([]);
  const [subTask, setSubTask] = useState("");
  const [subTaskId, setSubTaskId] = useState("");
  const [reload, setReload] = useState(false);
  const [MainTodoCheckedItems, setMainTodoCheckedItems] = useState({checked : false});
  const [MainTodoCheckedId, setMainTodoCheckedId] = useState("");
  const [MainTodoCheckedValue, setMainTodoCheckedValue] = useState("");
  const [SubTodoCheckedItems, setSubTodoCheckedItems] = useState({});
  const [SubTodoCheckedId, setSubTodoCheckedId] = useState("");
  const [SubTodoCheckedValue, setSubTodoCheckedValue] = useState("");

  let form = useRef(null);
  function validate() {
    form.current.reportValidity();
  }
  useEffect(() => {
    handleGetTodos().then((data) => {
      setTodos(data);
      setShowAccordion(true);
      setReload(false);
    });
  }, [reload]);

  //******Submit main task input field */
  function handleSubmit(e) {
    e.preventDefault();
    validate();
    if (validate !== "") {
      handleCreateTodos(todo).then((res) => {
        setReload(true);
      });
      setShowAccordion(true);
    } else {
      setShowAccordion(false);
    }
  }

  //*******Handle subtask input field */
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setSubTask(value);
    setSubTaskId(name);
  }

  //*******Submit subtask input field */
  function SubmitSubtask(e) {
    e.preventDefault();
    validate();
    if (validate !== "") {
      handleCreateSubTodos(subTask, subTaskId).then((res) => {
        setReload(true);
      });
      setShowAccordion(true);
    } else {
      setShowAccordion(false);
    }
  }

  //******main task checkedbox */
  const MainCheckbox = ({ id, type = "checkbox", name, checked = MainTodoCheckedItems.checked, onChange }) => {
    // console.log("Checkbox: ", name, checked);
    return (
      <input id={id} type={type} name={name} checked={MainTodoCheckedItems.checked} onChange={onChange} />
    );
  };

  //****handle Main checkboxes */
  const handleCheckSubtask = event => {
    const {id, name} = event.target
    setMainTodoCheckedItems(prevState => {
      return {
        ...prevState,
        [name]: event.target.checked,
      }
    })

    // setMainTodoCheckedItems((prevState) =>({
    //   ...prevState,
    //   ...MainTodoCheckedItems,
    //   [name]: event.target.checked
    // }));
    console.log("checkedItems: ", MainTodoCheckedItems);

    //****set the main todo checkbox id and value */
    setMainTodoCheckedValue(event.target.checked)
    setMainTodoCheckedId(id)

    //****hit the function */
     MainCheckBoxSubmit()
  };

  //*****after setting the id and value , let submit to the backend to update the status of the marked todo task */
function MainCheckBoxSubmit() {
  handleMainCheckedBoxTodos(MainTodoCheckedId,MainTodoCheckedValue).then(res => {
    console.log(res);
});
}

//******subtask checkedbox */
const SubCheckbox = ({ id, type = "checkbox", name, checked = false, onChange }) => {
  // console.log("Checkbox: ", name, checked);
  return (
    <input id={id} type={type} name={name} checked={checked} onChange={onChange} />
  );
};

//****handle Sub checkboxes */
const handleSubCheckSubtask = event => {
  const {id, name} = event.target
  setSubTodoCheckedItems((prevState) =>({
    ...prevState,
    ...SubTodoCheckedItems,
    [name]: event.target.checked
  }));
  console.log("sub-checkedItems: ", SubTodoCheckedItems);

  //****set the main todo checkbox id and value */
   setSubTodoCheckedValue(event.target.checked)
   setSubTodoCheckedId(id)

  //****hit the function */
   SubCheckBoxSubmit()
};
  //*****after setting the id and value , let submit to the backend to update the status of the marked sub todo task */
function SubCheckBoxSubmit() {
  handleSubCheckedBoxTodos(SubTodoCheckedId,SubTodoCheckedValue).then(res => {
    console.log(res);
});
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

        {showAccordion === true ? (
          <div>
            <Accordion
              todos={todos}
              SubmitSubtask={SubmitSubtask}
              handleChange={handleChange}
              handleCheckSubtask={handleCheckSubtask}
              MainCheckbox={MainCheckbox}
              MainTodoCheckedItems={MainTodoCheckedItems}
              handleSubCheckSubtask={handleSubCheckSubtask}
              SubCheckbox={SubCheckbox}
              SubTodoCheckedItems={SubTodoCheckedItems}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
