import { siteConfig } from "@/config/site";
import { RightArrow } from "@/components/icons";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'

interface Props {
    name: string,
    index: number
}

interface CardProps {
    name: string,
    description: string,
    color: string
}

function Kaaran(props: Props) {
    return (
        <h2 className="flex flex-col justify-center text-xl">{props.name}</h2>
    );
}

function KaaranCard(props: CardProps) {
    return (
        <div className={`relative bg-zinc-100 dark:bg-slate-800 px-5 py-5 rounded-lg overflow-hidden`}>
            <div
                className="absolute w-[2.5%] top-0 left-0 h-full"
                style={{ backgroundColor: props.color }}
            ></div>
            <h3 className="text-lg font-bold">
                {props.name}
            </h3>
            <p className="text-md">
               {props.description}
            </p>
        </div>
    );
}

export default function WhySection() {
    const [currentSelection, setCurrentSelection] = useState(0);
    const [animationState, setAnimationState] = useState("animate-in");
    const [displayText, setDisplayText] = useState(siteConfig.reasons[0].description);
    const theme = useTheme().theme;

    useEffect(() => {
        setAnimationState("animate-out");
        const timer = setTimeout(() => {
            setDisplayText(siteConfig.reasons[currentSelection].description);
            setAnimationState("animate-in");
        }, 500);

        return () => clearTimeout(timer);
    }, [currentSelection]);

    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setCurrentSelection(index);
        }
    };

    return (
        <section className="lg:flex justify-between items-center gap-x-10 mt-10 lg:mt-0 w-full">
            <div className="lg:w-[35%]">
                {siteConfig.reasons.map((item) => {
                    return (
                        <div 
                            key={item.index}
                            className="hidden lg:flex items-center justify-start h-[110px] gap-3 hover:gap-6 transition-all duration-200 border-slate-600 border-b-1 cursor-pointer"
                            style={{fontWeight: item.index === currentSelection ? "bolder" : "normal"}} 
                            onClick={() => setCurrentSelection(item.index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => handleKeyDown(event, item.index)}
                        >
                            <Kaaran name={item.name} index={item.index} />
                            <RightArrow strokeWidth={"48"}/>
                        </div>
                    );
                })}
            </div>
            <div className="text-center lg:text-left lg:w-[55%]">
                <h1 className="text-3xl lg:text-5xl font-semibold mb-4 lg:mb-10">Why Choose Devansh International Documentation Consultancy (DIDC)?</h1>
                <p className={`hidden lg:block lg:text-xl lg:transition-all lg:duration-500 lg:transform ${animationState}`}>
                    {displayText}
                </p> 
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                    {siteConfig.reasons.map((item) => {
                        return (
                            <KaaranCard key={item.index} name={item.name} description={item.description} color={item.color} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
