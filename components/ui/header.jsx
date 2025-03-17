import {SignedIn , SignedOut ,SignInButton , UserButton} from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { LayoutDashboard } from "lucide-react";
export const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
        <Image
        src={"/logo.png"}
        alt="logo"
        width={150}
        height={200}
        /> 
        </Link>
        <div>
          <SignedIn>
            <Link href={"/dashboard"}>
            <Button variant="outline">
              <LayoutDashboard size={18}/>
              <span>Dashboard</span>
            </Button>
            </Link>
          </SignedIn>
            <SignedOut>   
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline"> Login </Button>
              </SignInButton >
            </SignedOut>
            <SignedIn>
              <UserButton /> 
            </SignedIn> 
            </div> 
            </nav>       
    </div>
     //intergrated the signup page using clerk
  );
};
export default Header ; //inital development of nav bar

