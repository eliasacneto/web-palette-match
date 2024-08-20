"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import FemaleAvatar from "@/public/female-avatar.svg";
import Image from "next/image";

interface ColorResult {
  id: number;
  title: string;
  content: string;
  color: string;
}

const result: ColorResult[] = [
  {
    id: 1,
    title: "Red",
    content: "Prompt message will be generated here...",
    color: "#FF5733",
  },
  {
    id: 2,
    title: "Green",
    content: "Prompt message will be generated here...",
    color: "#33FF57",
  },
  {
    id: 3,
    title: "Baby Blue",
    content: "Prompt message will be generated here...",
    color: "#7d92f3",
  },
];

const Result = () => {
  const [selectedColorId, setSelectedColorId] = useState<number | null>(null);

  const handleColorClicked = (id: number) => {
    setSelectedColorId(selectedColorId === id ? null : id);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-12">
      <div className="absolut w-full -ml-20 -mt-20 mb-4 ">
        <Link href="/">
          {" "}
          <Button variant="link" className="gap-2">
            <ArrowLeft /> Go back
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl">Welcome to Palette Match</h1>
        <span>These are the colors that suits you best!</span>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex items-center justify-center border border-gray-300 w-64 h-64 rounded-md shadow-md">
          <Image
            src={FemaleAvatar}
            alt="Female Avatar svg"
            className="md:w-[200px] "
            width={200}
            height={200}
          />
        </div>
        <div className="flex">
          <ul className="flex gap-4">
            {result.map((item) => (
              <li
                key={item.id}
                onClick={() => handleColorClicked(item.id)}
                className="border border-gray-300 w-14 h-14 rounded-md hover:shadow-md cursor-pointer"
              >
                <div
                  style={{ backgroundColor: item.color }}
                  className="w-full h-full rounded-md"
                ></div>
              </li>
            ))}
          </ul>
        </div>
        {selectedColorId && (
          <div className="flex flex-col items-center gap-4 mt-8">
            {result
              .filter((item) => item.id === selectedColorId)
              .map((item) => (
                <p key={item.id} className="text-center flex flex-col">
                  <span className="font-bold">Color: {item.title}</span>
                  {item.content}
                </p>
              ))}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-3">
        <Label htmlFor="picture" className="text-gray-400">
          Did you like the result?
        </Label>
        <div className="flex">
          <Button>
            <Link href="/">Get another Palette Match</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Result;
