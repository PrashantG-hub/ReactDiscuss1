
const DetailModel = ({ displayinfo }) => {
  return (
    <>
      <div onClick={displayinfo} className="z-2 w-[100%] fixed h-[100%] bottom-0 right-0 left-0 top-0 opacity-[20%] bg-green-600"></div>
      <div className="z-1 w-[320px] h-[100px] text-xs">
The film focuses on Reyes, a recent college graduate who is bestowed with an armor that grants him superpowers after being accidentally chosen by an ancient alien relic known as the Scarab.
      <button onClick={displayinfo} className="text-white w-[5px] h-[2px]">
        Hide
      </button>
      </div>
    </>
  );
};

export default DetailModel;
