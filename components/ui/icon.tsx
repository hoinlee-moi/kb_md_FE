import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

const IconVariants = cva("relative rounded-full flex items-center justify-center box-border bg-default overflow-hidden", {
  variants: {
    noti: {
      primary: "bg-primary ",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
    },
    size: {
      default: "w-[32px] h-[32px]",
      xs: "w-[24px] h-[24px]",
      sm: "w-[28px] h-[28px]",
      lg: "w-[40px] h-[40px]",
      xl: "w-[64px] h-[64px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type IconProps = {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof IconVariants>;

const Icon = ({ children, src, size, alt, className, noti }: IconProps) => {
  return (
    <label className="relative">
      <div className={cn(IconVariants({ size, className }))}>
        {children ? children : <Image src={src} style={{ objectFit: "cover" }} alt={alt} fill />}
      </div>
      {noti && (
        <div
          className={cn(IconVariants({ noti }), "absolute top-0 right-[5%] border-2 border-white w-[30%] h-[30%] max-w-3 max-h-3 rounded-full")}
        ></div>
      )}
    </label>
  );
};

export default Icon;
