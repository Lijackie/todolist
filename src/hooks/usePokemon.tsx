'use client';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function usePokemon (offset: number) {
    const { data: pokemonList, isPending } = useQuery({
        queryKey: ['pokemon', offset],
        queryFn: () => axios(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset * 10}`)
            .then((res) => res.data.results)
    });

    return { isPending, pokemonList};
}