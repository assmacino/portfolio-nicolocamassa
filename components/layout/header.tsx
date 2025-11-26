import { InteractiveContainer } from "../ui/interactive-container"
import NavBar from "../ui/navbar"
import Logo from "../ui/logo"

export function Header(){
    return  <header className="h-[70px] px-10 flex items-center justify-between"> 
{/*                 <InteractiveContainer variant="nav">
                    <NavBar />
                </InteractiveContainer>
                <InteractiveContainer variant="nav">
                    <NavBar />
                </InteractiveContainer>
                <InteractiveContainer variant="nav">
                    <NavBar />
                </InteractiveContainer> */}
            </header>
}

export function HeaderMobile(){
    return <header></header>
}