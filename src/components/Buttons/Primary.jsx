function GenerateBtn({ children }) {
    return (
      <button className="bg-deep-purple p-4 text-almost-white font-bold w-full border border-deep-purple hover:bg-transparent hover:text-deep-purple fill-almost-white hover:fill-deep-purple sm:text-lg ">
        {children}
      </button>
    );
  }
  
  export default GenerateBtn;
  