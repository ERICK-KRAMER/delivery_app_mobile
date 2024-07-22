import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      className={`w-full py-4 px-4 border-b border-gray-400 outline-none ${className}`}
      ref={ref}
    />
  );
});

Input.displayName = "Input";
