'use client';

import { Image } from '@nextui-org/react';
import { useDrop } from 'react-dnd';
import pokeball from '@/images/pokeball.png';

const Pokeball = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "Card",
        drop: () => ({ name: 'Pokeball' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver

    return (
        <div ref={drop} className='fixed bottom-2 right-2'>
            <Image width={100} height={100} src={pokeball.src} />
        </div>
    )
}

export default Pokeball