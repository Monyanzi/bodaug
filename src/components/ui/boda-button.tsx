import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bodaButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:shadow-md hover:shadow-black/10 hover:border hover:border-primary",
        secondary: "bg-background text-foreground border border-primary hover:border-2 hover:border-primary",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        hero: "bg-accent text-accent-foreground border-2 border-transparent hover:border-primary hover:shadow-lg hover:shadow-accent/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-lg px-8 py-4 text-base",
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