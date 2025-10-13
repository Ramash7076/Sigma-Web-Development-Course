"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  return (<>
    <div>Hey this is our page</div>
    <p>Hey this is our page and blog is {searchParams.get("blog")} utm source is {searchParams.get("utm_source")}</p>
    </>
  );
}
