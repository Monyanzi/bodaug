import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bodaButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98]",
        secondary: "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background active:scale-[0.98]",
        ghost: "bg-transparent text-foreground hover:bg-foreground/5 active:bg-foreground/10",
        outline: "bg-transparent text-foreground border border-border hover:border-foreground active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-6 text-sm",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface BodaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof bodaButtonVariants> {
  asChild?: boolean
}

const BodaButton = React.forwardRef<HTMLButtonElement, BodaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(bodaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BodaButton.displayName = "BodaButton"

export { BodaButton, bodaButtonVariants }