import Badge from "../ui/badge"
import ProjectCard from "../ui/project-card"


export default function Projects(){
    return <>
    <section className="py-20 md:py-24 lg:py-32">
        <Badge>Progetti</Badge>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 gap-x-5">
            <ProjectCard variant="horizontal"/>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </section>
    </>
}