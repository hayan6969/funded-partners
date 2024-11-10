"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {LoaderCircle} from "lucide-react";
import authService from "@/appwrite/auth";
import { useRouter } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import {login as authLogin} from "../redux/slices/authSlice";
import { store } from "../redux/store/store";


export default function SigninForm() {
  const dispatch = useDispatch();
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted", data);
    setLoading(true);
    const userData= await authService.login({
      email: data.email.toString(),
      password: data.password.toString(),
    }).catch((error) => {
        console.log('login error', error)
        setLoading(false);
    });

    if (userData) {
      console.log("login successfull")
      dispatch(authLogin(userData));
      router.push("/");
    }
    
  };
  const router = useRouter();
const [loading, setLoading] = React.useState(false);
  return (
    <Provider store={store}>
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Sign in to Funded Partners
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign in to funded partners to get started, or <Link className="font-bold" href={'/sign-up'}>Sign Up</Link> if you dont have an account
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
       
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {
            loading ? (
              
<div className="flex justify-center items-center">
<LoaderCircle className="animate-spin text-white" size={20} />
</div>
            ) : (
              "Sign In"
            )
          }
          <BottomGradient />
        </button>
      </form>
    </div>
    </Provider>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple-700 to-transparent" />
    </>
  );
};

type LabelInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
