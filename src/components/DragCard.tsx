'use client';

import { useDrag } from "react-dnd";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { toast } from 'react-toastify';

interface PokemonCardProps {
    name: string,
    url: string,
}

interface DropResult {
    name: string
}

const DragCard = ({ name, url }: PokemonCardProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Card",
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                toast(`祝抓到 ${item.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));


    return (
        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 max-h-[200px]"
            shadow="sm"
            ref={drag}>
            <CardBody >
                <Image
                    alt="Album cover"
                    className="object-cover"
                    height="100%"
                    width="100%"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                />
                <div className="text-center">
                    <Link
                        href={url}
                    >
                        {name}
                    </Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default DragCard