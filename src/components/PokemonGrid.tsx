'use client';
import { useState } from 'react';
import { Input } from '@nextui-org/react';
import DragCard from '@/components/DragCard';
import { usePokemon } from '@/hooks/usePokemon';
import 'react-toastify/dist/ReactToastify.css';

interface PokemonList {
    name: string
    url: string
}

export default function PokemonGrid() {
    const [searchText, setSearchText] = useState("");
    const [offset, setOffset] = useState(0);

    const { isPending, pokemonList } = usePokemon(offset);

    // if (isPending) {
    //     return <div>讀取中，請稍後</div>
    // }

    return (
        <>
            <div className='mb-5'>
                {/* <h3 className='text-2xl py-6 text-center'>搜尋寶可夢</h3> */}
                <div className=''>
                    <Input type="text" label="名子" labelPlacement='outside' placeholder='皮卡丘、夢幻' autoComplete='off' onChange={(event) => setSearchText(event.target.value)} />
                </div>
            </div>
            <div className='grid gap-3 lg:grid-cols-4'>
                {pokemonList?.map((pokemon: PokemonList) => (
                    <DragCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                ))}
            </div>
            <button onClick={() => setOffset(offset + 1)}>載入更多</button>

        </>

    )
}