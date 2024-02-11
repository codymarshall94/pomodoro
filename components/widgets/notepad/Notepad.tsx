"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const Notepad = () => {
  return (
    <div className="flex flex-col bg-card rounded-md p-4 gap-4 h-min opac">
      <h3 className="text-primary font-bold">Notepad</h3>
      <Textarea />
    </div>
  );
};

export default Notepad;
