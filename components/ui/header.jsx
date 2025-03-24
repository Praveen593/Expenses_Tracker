import {SignedIn , SignedOut ,SignInButton , UserButton} from "@clerk/nextjs"
import Image from "next/image";
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
      
            <SignedOut>   
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton /> 
            </SignedIn>  
            </nav>
    </div>
     //intergrated the signup page using clerk
  );
};
export default Header ; //inital development of nav bar

