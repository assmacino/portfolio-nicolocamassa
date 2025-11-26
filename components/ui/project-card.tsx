import { tv } from "tailwind-variants";
import Badge from "./badge";
import { InteractiveContainer } from "./interactive-container";

interface ProjectCardProps{
    variant?: "horizontal",
    className?: string
}

const cardStyles = tv({
    slots: {
        card: "border-1 border-gray-300 rounded-xl p-2 pb-6",
        imgContainer: "relative py-15 overflow-hidden rounded-lg bg-[url(/demo-hero.png)]",
        imgGradient: "absolute inset-0 from-white to-transparent z-10 bg-gradient-to-t",
        text: "flex flex-col px-5 text-center",
    },  

    variants: {
        variant: {
            horizontal: {
                card: "md:col-span-full md:flex md:py-2",
                imgContainer: "md:w-4/9",
                imgGradient: "md:bg-gradient-to-l",
                text: "md:text-start md:justify-around md:[&_h3]:text-4xl md:max-w-2/4 [&_p]:mb-0",
            },
            
            vertical: {
                card: "pb-6",
                imgContainer: "",
                imgGradient: "",
                text: "items-center text-center",
            }
        }
    },

    defaultVariants: {
        variant: "vertical"
    }
})

export default function ProjectCard({ variant, className }: ProjectCardProps){

    const { card, imgContainer, imgGradient, text } = cardStyles({ variant });

    return <>
        <article className={card({variant, className})}>
            <div className={imgContainer({variant})}>
                <img className="relative object-cover w-2/3 left-0 mx-auto z-20 rounded" src="/project-demo.png" alt="Immagine del progetto" />
                <div className={imgGradient({variant})}></div>
            </div>

            <div className={text({variant})}>
            
                <div className="py-2">
                    <Badge variant="sm" className="mb-5">Next.js</Badge>
                    <h3 className="font-extrabold text-xl">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde eaque ad cumque quia veritatis perferendis libero? Mollitia temporibus.</p>
                </div>

                <InteractiveContainer variant="btn">Esplora</InteractiveContainer>
            </div>
        </article>
    </>
}