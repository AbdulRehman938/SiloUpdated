const PlayButton = () => {
  return (
    <button
      className="
        w-28 h-28
        rounded-full 
        bg-white 
        flex items-center justify-center 
        shadow-lg
        hover:scale-105 
        transition-transform 
        cursor-pointer
      "
    >
      <div
        className="
          w-0 
          h-0 
          border-t-[20px] 
          border-b-[20px] 
          border-l-[32px] 
          border-t-transparent 
          border-b-transparent 
          border-l-black
          ml-2
        "
      ></div>
    </button>
  );
};

export default PlayButton;
