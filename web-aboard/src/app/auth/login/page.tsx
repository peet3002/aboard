"use client";

import Image from "next/image";


export default function LoginPage() {
  // const [state, formAction] = useFormState(login, { error: "" });

  return (
    <>
      <div className="flex h-screen items-center justify-center  bg-green-500">
        <div className="flex h-full w-full flex-col lg:flex-row">

          <div className="flex flex-1 items-center justify-center p-8">
            <div className="w-full max-w-sm">
              <h2 className="mb-6 text-[28px] leading-[34px] font-semibold text-white">Sign in</h2>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="mt-1 block w-full h-[44px] rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm placeholder:text-textSecondary px-2"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-success px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center bg-green-300 p-8 rounded-tl-[36px] rounded-bl-[36px]">
            <div className="flex flex-col items-center">
              <div className="relative mb-4 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="a Board"
                  width={299.61}
                  height={179.13}
                />
              </div>
              <h1 className="text-white text-[28px] italic text-xl font-serif">a Board</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}