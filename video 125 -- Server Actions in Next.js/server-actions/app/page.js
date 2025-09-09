"use client"
import Image from "next/image";
import { submitAction } from "@/actions/form";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function Home() {

  let ref = useRef()

  return (
    <div className="w-2/3 mx-auto my-4 ">
      <form className="text-center" ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div >
          <label htmlFor="name">Name</label>
          <input  className="text-white mx-3 bg-gray-800 rounded-md" name="name" id="name" type="text" />
          
        </div>
        <div className="my-2">
          <label htmlFor="add">Address</label>
          <input className="text-white mx-3 bg-gray-800 rounded-md" name="add" id="add" type="text" />
          
        </div>
        <div className=" text-center">
          <button className="rounded-md border px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
