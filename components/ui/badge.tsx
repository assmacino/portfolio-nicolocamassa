import { tv } from "tailwind-variants";

const badge = tv({
    base: "bg-[var(--color-secondary)]/[20%] py-1 px-5 text-[var(--color-secondary)] font-medium rounded-full text-sm mb-2 inline-block",
    variants: {
        variant: {
            sm: "text-[0.75rem]",
        }
    }
})

interface BadgeProps {
    children: React.ReactNode,
    variant?: "sm",
    className?: string,
}

export default function Badge({ children, variant, className }: BadgeProps){ /* TODO: Aggiungere la className */
    return <>
        <span className={badge({variant, className})}>
            { children }
        </span>
    </>
}