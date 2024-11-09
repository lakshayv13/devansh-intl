import clsx from "clsx";
import { title } from "../../components/primitives";
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider"
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards-2";
import { siteConfig } from "@/config/site";

interface Benefit {
    title: string;
    description: string;
}

interface Props {
    name: string,
    description: string,
    benefits: Benefit[];
}

export default function ServiceInfo(props: Props) {
    return (
        <div className="flex flex-col gap-y-[6rem]">
            <section className="flex justify-between items-center">
                <div className="flex flex-col gap-y-5 w-full lg:w-[50%]">
                    <h1 className={title()}>{props.name}</h1>
                    <p>{props.description}</p>
                </div>
                <Image src="/service.png" alt="map" width={500} height={500} className="hidden lg:inline" />
            </section>
            <section className="w-full dark:bg-slate-800 bg-gray-300 p-10">
                <div className="flex flex-col gap-y-5">
                    <h1 className={clsx(title(), "text-[2rem] lg:text-3xl text-center")}>Benefits of {props.name}</h1>
                    <div className="flex flex-wrap justify-center gap-y-5 lg:flex-nowrap gap-x-5 mt-5">
                        {props.benefits.map((benefit, idx) => {
                            return (
                                <Card key={idx} className="max-w-[400px]">
                                    <CardHeader className="flex gap-3">
                                        <div className="flex flex-col">
                                        <p className="text-md font-semibold">{benefit.title}</p>
                                        <p className="text-small text-default-500">DIDC</p>
                                        </div>
                                    </CardHeader>
                                    <Divider/>
                                    <CardBody>
                                        <p>{benefit.description}</p>
                                    </CardBody>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="flex flex-col gap-y-5">
                    <h1 className={clsx(title(), "text-[2rem] lg:text-3xl text-center")}>Documents Typically Requiring {props.name}</h1>
                    <InfiniteMovingCards
                        items={siteConfig.serviceDocument}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section>
        </div>
    )
}