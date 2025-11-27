import Badge from "../ui/badge";

export default function About(){
    return <>
    
        <section className="py-50 flex flex-col items-center text-center border-b-1 border-gray-200">
            <Badge>About</Badge>
            <h2 className="font-sans font-semibold my-5 text-balance  text-[clamp(1.25rem,4.5vw,3rem)]">Sorem ipsum dolor sit amet, <span className="text-[var(--color-secondary)]">consectetur adipiscing</span> elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className="text-balance"> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
        </section>
    </>
}