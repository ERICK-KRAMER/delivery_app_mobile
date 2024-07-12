import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input type="text" {...props} className={`w-full py-4 px-4 border-b border-gray-400 outline-none ${props.className}`} ref={ref} />
});
