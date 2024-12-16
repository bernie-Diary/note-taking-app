import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import React from "react";
import CreateNoteDialog from "@/components/CreateNoteDialog";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="grainy min-h-screen">
        <div className="max-w-7xl mx-auto p-10 ">
          <div className="h-14"></div>
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex items-center">
              <Link href="/">
                <Button className="bg-green-600 size='sm'"> 
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </Button>
              </Link>
              <div className="w-4"></div>
                <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
                <div className="w-4"></div>
                <UserButton/>
            </div>
          </div>
          <div className="h-8"></div>
          <Separator/>
          <div className="h-8"></div>

          <div className="text-center">
                <h2 className="text-xl text-gray-500">You have no notes yet.</h2>
          </div>

          <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-4 ">
            <CreateNoteDialog/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
