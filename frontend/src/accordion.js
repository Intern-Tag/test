const Accordion = ({
  todos,
  SubmitSubtask,
  handleChange,
  handleCheckSubtask,
  MainCheckbox,
  MainTodoCheckedItems,
  handleSubCheckSubtask,
  SubCheckbox,
  SubTodoCheckedItems
}) => {
  return (
    <>
      {todos.map(todoa => {
        return (
          <div key={todoa.id}>
            <div className='border-2 border-gray-600 px-4 pt-2 pb-1 cursor-pointer bg-green-300'>
              <div className='flex justify-between min-h-[60px]'>
                <>
                  <div className='flex items-center pb-1 font-semibold'>
                    <div className='flex items-center'>
                      {console.log("over hers", todoa)}
                      <MainCheckbox
                        id={todoa.id}
                        name={todoa.title}
                        checked={todoa.status === "COMPLETED"}
                        onChange={handleCheckSubtask}
                      />
                      {/* <input
                          key={todoa.id}
                          type="checkbox"
                          // checked={todoChecked}
                          className="mr-2 cursor-pointer"
                          name={todoa.id}
                          onClick={handleCheckSubtask}
                        /> */}
                    </div>
                    {/* <input type="checkbox" className="mr-2 cursor-pointer " /> */}
                    <label htmlFor=''>{todoa.title}</label>
                  </div>
                </>

                {/* <div className="flex items-center pb-1 font-semibold">
            <input type="checkbox" className="mr-2 cursor-pointer " />
            <label htmlFor="">{todo}</label>
          </div> */}
                <div className='flex items-end text-xs text-gray-600'>
                  {`${
                    todoa.subtasks.filter(
                      subtask => subtask.status === 'COMPLETED'
                    ).length
                  } of ${todoa.subtasks.length} tasks completed`}
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
            {todoa.subtasks.map(subtask => (
              <div key={subtask.id}>
                <>
                  <div className='flex items-center text-gray-600 border border-gray-600 mx-4 px-4 py-3 cursor-pointer'>
                    <div className='flex items-center'>
                      <SubCheckbox
                        id={subtask.id}
                        name={subtask.title}
                        checked={subtask.status === 'COMPLETED'}
                        onChange={handleSubCheckSubtask}
                      />
                    </div>
                    <label htmlFor=''>{subtask.title}</label>
                  </div>
                </>
              </div>
            ))}

            <div className='border border-gray-600 mx-4 px-4 py-2 cursor-pointer'>
              <div className='flex justify-between'>
                <div onChange={handleChange}>
                  <div className='flex items-center'>
                    <input
                      key={todoa.id}
                      type='text'
                      className='mr-2 cursor-pointer outline-none'
                      placeholder='What are the steps?'
                      name={todoa.id}
                    />

                    <button
                      className='border border-black text-xs p-2 rounded-md'
                      type='button'
                      onClick={SubmitSubtask}
                    >
                      {' '}
                      New Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Accordion
