import { tv } from 'tailwind-variants'

interface InteractiveContainerProps {
  variant: "nav" | "btn" | "logo";
  className?: String;
  children?: React.ReactNode;
}


const button = tv({
  base: "px-7 bg-[var(--light-dark)] rounded-[100vw] flex",
  variants: {
    variant: {
        nav: "pr-0 [&_.highlighted]:bg-[var(--foreground)] [&_.highlighted]:text-white [&_.highlighted]:rounded-[100vw] [&_.highlighted]:py-2 [&_.highlighted]:px-7 [&_li]:mr-5 [&_.highlighted]:mx-0 [&_.highlighted]:-ml-2",
        btn: "py-2 ",
        logo: "[&_svg]:bg-[var(--foreground)] [&_svg]:py-2",
    },

    size: {
      small: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {

  },
});

/* Pulsanti interattivi */
export function InteractiveContainer({ className, variant = "nav", children }: InteractiveContainerProps){
    return <>
        <div className={`items-center text-sm font-medium ${className || ""}`}>
            <div className={button({variant: `${variant}`})}>
                { children }
            </div>
        </div>
    </>
}