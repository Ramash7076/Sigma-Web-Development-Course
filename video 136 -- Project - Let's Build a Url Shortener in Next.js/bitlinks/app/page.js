import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-56 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className='flex gap-3 '>
            <Link href="/shorten"><button className='bg-purple-600 rounded-lg p-2 py-1 font-bold shadow-lg text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-600 rounded-lg p-2 py-1 font-bold shadow-lg text-white'>Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
