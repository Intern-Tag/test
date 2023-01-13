const Accordion = ({ todo }) => {
  return (
    <div>
      <div className="border-2 border-gray-600 px-4 pt-2 pb-1 cursor-pointer bg-green-300">
        <div className="flex justify-between min-h-[60px]">
          <div className="flex items-center pb-1 font-semibold">
            <input type="checkbox" className="mr-2 cursor-pointer " />
            <label htmlFor="">{todo}</label>
          </div>
          <div className="flex items-end text-xs text-gray-600">
            {" "}
            3 of 5 tasks completed
          </div>
        </div>
      </div>
      
        
          <div className="flex items-center text-gray-600 border border-gray-600 mx-4 px-4 py-3 cursor-pointer">
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <label htmlFor="">wwe</label>
      </div>
      <div className="border border-gray-600 mx-4 px-4 py-2 cursor-pointer">
        <div className="flex justify-between">
          <div className="flex items-center">
            <input type="input" className="mr-2 cursor-pointer outline-none" placeholder="What are the steps?"/>
          </div>
          <button className="border border-black text-xs p-2 rounded-md">
            {" "}
            New Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
