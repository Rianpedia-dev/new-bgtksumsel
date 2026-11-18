"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
export { GradientButton, gradientButtonVariants, Demo as GradientButtonDemo } from "./gradient-button"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[11px] text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "gradient-button text-white font-bold shadow-md",
        gradient:
          "gradient-button text-white font-bold shadow-md min-w-[132px]",
        gradientVariant:
          "gradient-button gradient-button-variant text-white font-bold shadow-md min-w-[132px]",
        solid:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-input bg-background/80 backdrop-blur-xs shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        xs: "h-7 px-2.5 text-xs rounded-[8px]",
        sm: "h-8 px-3.5 text-xs rounded-[9px]",
        lg: "h-12 px-8 text-base rounded-[11px]",
        xl: "min-w-[132px] px-9 py-4 text-base leading-[19px] rounded-[11px]",
        icon: "h-9 w-9 rounded-[10px]",
        "icon-sm": "h-8 w-8 rounded-[9px]",
        "icon-xs": "h-6 w-6 rounded-[7px]",
        "icon-lg": "h-11 w-11 rounded-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
