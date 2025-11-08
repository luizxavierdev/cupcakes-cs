"use client";
import {
  ButtonProps as UIButtonProps,
  Button as UIButton,
} from "@nextui-org/button";

export type ButtonProps = Omit<UIButtonProps, "radius" | "className"> & {
  extraClassNames?: string;
};

export function Button({ children, extraClassNames, ...props }: ButtonProps) {
  return (
    <UIButton
      radius="full"
      className={`
        bg-zinc-800 
        text-white 
        dark:bg-zinc-800 
        dark:text-white 
        hover:bg-zinc-700 
        dark:hover:bg-zinc-700 
        transition-colors 
        duration-200 
        shadow 
        hover:shadow-md 
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-500 
        focus:ring-offset-2 
        dark:focus:ring-offset-zinc-900 
        px-6 
        py-2 
        font-medium 
        ${extraClassNames}
      `}
      {...props}
    >
      {children}
    </UIButton>
  );
}
