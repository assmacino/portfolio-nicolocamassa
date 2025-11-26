import { tv } from "tailwind-variants";

const badge = tv({
    base: "bg-[var(--color-secondary)]/[20%] py-1 px-5 text-[var(--color-secondary)] font-medium rounded-full text-sm mb-2",
    variants: {

    }
})

interface BadgeProps {
    children: React.ReactNode;
}

export default function Badge({ children, className }: BadgeProps){ /* TODO: Aggiungere la className */
    return <>
        <span className={badge()}>
            { children }
        </span>
    </>
}