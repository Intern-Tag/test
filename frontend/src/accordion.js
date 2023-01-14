const Accordion = ({ todos, lists, subTask, setSubTask, handleSubtask, handleChange,handleSubCheckChange,handleCheckSubtask, todoChecked }) => {
    
  return (
    <>
    {todos.map((todoa) => {
    return (
    <div key={todoa.id}>
        
      <div className="border-2 border-gray-600 px-4 pt-2 pb-1 cursor-pointer bg-green-300">
        <div className="flex justify-between min-h-[60px]">
        
        <>
        <div className="flex items-center pb-1 font-semibold">
        <div onChange={handleCheckSubtask}>
          <div className="flex items-center">
          <input key={todoa.id} type="checkbox" checked={todoChecked}   className="mr-2 cursor-pointer" name={todoa.id} onClick={handleCheckSubtask} />
          </div>
          </div>
            {/* <input type="checkbox" className="mr-2 cursor-pointer " /> */}
            <label htmlFor="">{todoa.title}</label>
          </div>
        </>
      
          {/* <div className="flex items-center pb-1 font-semibold">
            <input type="checkbox" className="mr-2 cursor-pointer " />
            <label htmlFor="">{todo}</label>
          </div> */}
          <div className="flex items-end text-xs text-gray-600">
            {" "}
            3 of 5 tasks completed
          </div>
        </div>
      </div>
      

      {/* {lists.map((list) => (
        <>
          <div className="flex items-center text-gray-600 border border-gray-600 mx-4 px-4 py-3 cursor-pointer">
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <label htmlFor="">{list.title}</label>
          </div>
        </>
      ))} */}
      {todoa.subtasks.map((subtask) => ( 
      <>
      <div key={subtask.id} >
      <div className="flex items-center text-gray-600 border border-gray-600 mx-4 px-4 py-3 cursor-pointer">
      <div onChange={handleSubCheckChange}>
          <div className="flex items-center">
          <input key={subtask.id} type="checkbox" className="mr-2 cursor-pointer" name={subtask.id} onClick={handleCheckSubtask} />
          </div>
          </div>
            <label htmlFor="">{subtask.title}</label>
      </div>
      </div>
      </>
      ))}
      

      <div  className="border border-gray-600 mx-4 px-4 py-2 cursor-pointer">
        <div className="flex justify-between">
        <div onChange={handleChange}>
          <div className="flex items-center">
            
          <input
              key={todoa.id}
              type="text"
              className="mr-2 cursor-pointer outline-none"
              placeholder="What are the steps?"
              name={todoa.id}
            />
          
          <button className="border border-black text-xs p-2 rounded-md" type="button" onClick={handleSubtask}>
            {" "}
            New Step
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    ) })}
    </>
  );
};

export default Accordion;
