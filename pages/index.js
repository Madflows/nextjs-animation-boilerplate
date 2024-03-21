import { capitalize } from "@/utils/functions";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className="flex items-center gap-6">

        <Image src={'/assets/greensock.svg'} width={100} height={100} alt="Greensock logo" />
        <p className="text-xl font-light">X</p>
        <Image src={'/assets/next-js.svg'} width={100} height={100} alt="NextJS logo" />
        </div>
      </div>
      
    </main>
  );
}
