import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import ChooseClothes from "@/public/chooseClothes.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-12">
      <div className="text-center">
        <h1 className="font-bold text-xl">Welcome to Palette Match</h1>
        <span>Find the color that suits you best</span>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={ChooseClothes}
          alt="choose clothes svg"
          className="md:w-[420px] -ml-14"
          width={847}
          height={656}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Label htmlFor="picture" className="text-gray-400">
          Upload a profile picture
        </Label>
        <div className="flex flex-col gap-4">
          <Input id="picture" type="file" />

          <Button>
            <Link href="/result">Get results</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
