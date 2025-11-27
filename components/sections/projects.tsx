import Badge from "../ui/badge"
import ProjectCard from "../ui/project-card"


export default function Projects(){
    return <>
    <section className="py-20 md:py-24 lg:py-32">

        <div className="text-center flex flex-col items-center mb-20">
            <Badge>Progetti</Badge>
            <h2 className="font-sans font-bold text-5xl/15 my-2">Scopri i miei progetti</h2>
            <p className="max-w-2/3"> Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 gap-x-5">
            <ProjectCard variant="horizontal"/>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </section>
    </>
}