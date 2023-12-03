'use client';

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                <DndProvider backend={HTML5Backend}>
                    {children}
                </DndProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </NextUIProvider>
    )
}