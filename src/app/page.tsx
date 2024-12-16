import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100 grainy">
          <div className='flex flex-col justify-center items-center h-[100vh] '>
            <h1 className="font-semibold text-7xl text-center">
              AI <span className="text-green-600 font-bold">note taking</span> assistant.
            </h1>

            <div className="mt-4">
              <h2 className="font-semibold text-3xl text-center text-slate-700">
                <TypewriterTitle/>
              </h2>
            </div>
            <div className="mt-8">
                <Link href="/dashboard">
                  <Button className="bg-green-600"> Get Started <ArrowRight className="ml-1 w-5 h-5"/></Button>
                </Link>
              </div>
          </div>
    </div>
  );
}