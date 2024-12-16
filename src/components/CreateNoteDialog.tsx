"use client";
import React from "react";
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

const CreateNoteDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-dashed border-2 border-green-600 h-full rounded-lg items-center justify-center flex sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4 cursor-pointer">
          <Plus className="w-6 h-6 text-green-600" />
          <h2 className="font-semibold text-green-500">New Note Book</h2>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
           New Note Book
          </DialogTitle>

          <DialogDescription>
          Create a new note by clicking the button below
          </DialogDescription>
        </DialogHeader>

        <form>
          <Input placeholder="Name..."/>
          <div className="h-4"></div>
          <div className="flex tems-center gap-2">
            <Button type="reset" variant={'secondary'}>Cancel</Button>
            <Button type="submit" className="bg-green-600">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
