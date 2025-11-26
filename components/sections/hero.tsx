import { InteractiveContainer } from "../ui/interactive-container"
import Badge from "../ui/badge"


export default function Hero(){
    return <>
        <section className="py-2">
            <div className="flex flex-col items-center pb-2 my-[100px]">
                <Badge>Full Stack Web Developer</Badge>

                <header className="flex flex-col items-center my-5">
                    <h1 className="text-center font-sans font-black my-5 uppercase text-balance text-[clamp(1.75rem,4.5vw,5rem)] leading-none">Sviluppo interfacce chiare, veloci e affidabili</h1>
                    <p className="text-base text-center md:max-w-1/2 md:text-lg">Il mondo tech è stato il mio primo interesse, sono da sempre stato appassionato a questo mondo. Nei miei primi anni su internet ho sperimentato tanto</p>
                </header>
            
                <InteractiveContainer variant="btn" className={"mt-10"}>Vedi i progetti</InteractiveContainer>
            </div>
            
            <div className="w-screen -ml-[20px] flex items-center overflow-hidden xl:-ml-[180px]"> {/* Larghezza margin presa da layout */} {/* TODO: Rendere dinamici i margin */}
                <img className="object-cover h-150 min-w-1/1 max-w-1/1" src="/demo-hero.png" alt="" />
            </div>
        </section>
      </>
}