import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "./ui/button";

interface ResultModalProps {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  result: string;
}

const ResultModal: React.FC<ResultModalProps> = ({ status, setStatus, result }) => {
  return (
    <div
      className={`${
        status ? "block" : "hidden"
      } flex items-center justify-center fixed z-10 left-0 right-0 w-full h-full`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div
        className="relative bg-[#fefefe] py-8 px-10 w-full md:w-[50%]"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Result</h1>
          <span
            className="text-lg px-4 py-2 rounded-lg cursor-pointer hover:bg-red-100"
            onClick={() => setStatus(false)}
          >
            <IoMdClose />
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <h4 className="text-lg font-medium">{result}</h4>
          <Button className="w-fit" onClick={()=>setStatus(false)}>Done</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
