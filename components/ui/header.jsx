import {SignedIn , SignedOut ,SignInButton , SignUpButton , UserButton} from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
export const Header = () => {
  return (
    <div>
            <Button><SignedOut>   
              <SignInButton />
              <SignUpButton />
            </SignedOut></Button>
            <SignedIn>
              <UserButton /> 
            </SignedIn>  
    </div> //intergrated the signup page using clerk
  );
};
export default Header ;