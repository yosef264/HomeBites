import { House, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <>
      <header className="flex p-4 justify-between bg-lighter">
        {/* Icon and Name part */}
        <div className="flex">
          <House className={`bg-gradient-to-br from-primary to-secondary text-lighter rounded-lg h-12 w-12 p-1`} />
          <div className="pl-2 text-2xl">
            <h2 className="">HomeBites</h2>
            <p className="text-[10px]">Local Food Network</p>
          </div>
        </div>
        {/* Food and about us part */}
        <div className="content-center">
          <Link href="/food" className="pr-4">
            Find Food
          </Link>
          <Link href="/host" className="pr-4">
            Become a Host
          </Link>
          <Link href="/about">About Us</Link>
        </div>
        {/* Search and log in part */}
        <div className="content-center flex">
          <Button>
            Search
            <Search h-4 w-4 />
          </Button>
        </div>
      </header>
    </>
  );
}
