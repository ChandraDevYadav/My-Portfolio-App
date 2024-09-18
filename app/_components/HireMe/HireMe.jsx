import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";

function HireMe() {
  return (
    <div className="mx-6">
      <Popover>
        <PopoverTrigger className="text-white bg-purple-500 px-8 rounded-lg py-3">Hire Me</PopoverTrigger>
        <PopoverContent className=''>
            <h1 className="text-lg font-bold my-3 text-center">Start Chat with Me</h1>
            <div className="grid grid-cols-3">
                {/* <Link href={'tel:+9779805912060'}>
                    <Image src={'/p.png'} width={60} height={60}/>
                </Link> */}
                <Link href={'tel:+9779805912060'}>
                <Image src={'/w.png'} width={60} height={60}/>
                </Link>
                <Link href={'mailto:yadavchandradev4@gmail.com'}>
                <Image src={'/e.png'} width={60} height={60}/>
                </Link>
            </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default HireMe;
