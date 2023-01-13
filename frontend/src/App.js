import { useState, useRef, useEffect } from "react";
import Accordion from "./accordion";
import { handleGetTodos } from "./services/todo";

function App() {
  const [todo, setTodo] = useState("");
  const [showAccordion, setShowAccordion] = useState(false);

  let form = useRef(null);
  function validate() {
    form.current.reportValidity();
  }
  useEffect(() => {
    handleGetTodos()
  },[])
  function handleSubmit(e) {
    e.preventDefault();
    validate();
    if (validate !== "") {
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
            required
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
        
        {showAccordion === true ? <div><Accordion /></div> : null}
      </div>
    </div>
  );
}

export default App;
