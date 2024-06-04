import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className="flex items-center w-full"
      >
        <Search className="text-[#56636b] -mr-10 z-20" />
        <input
          type={type}
          className={cn(
            "flex h-[40px] w-full rounded-md text-white  bg-background px-3 py-2 text-sm ring-offset-background  file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
          disabled
          
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
