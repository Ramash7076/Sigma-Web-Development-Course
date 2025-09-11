import Image from "next/image";


export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg" fill={true}  alt="" />
      
    </div>
  );
}
