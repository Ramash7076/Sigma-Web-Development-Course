"use client"
import Image from "next/image";

export default function Home() {

  const handleChange = async ()=>{
    let data = {
      name: "Rohan",
      role: "coder",
    }
    let a = await fetch("/api/add", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
    let res = await a.json()
    console.log(res);
    
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js api routes demo</h1>
      <button onClick={handleChange}>Click me</button>
    </div>
  );
}
