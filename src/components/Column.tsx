'use client'

import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { Textarea, Button, Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";


interface ColumnProps {
    title: string;
    atom: any;
}

const Column = ({ title, atom }: ColumnProps) => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useAtom<string[], unknown[], unknown>(atom);
    //const todos = useAtomValue<string[]>(atom);
    //const [, setTodos] = useAtom(atom);

    const handleSetText = (text: string) => {
        if (text === "") return;

        setTodos([...todos, text]);
        setText("");
    }

    const handleRemove = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);

        setTodos(newTodos);
    }

    return (
        <div className='flex flex-col p-3 bg-[#141415] rounded-lg space-y-3 '>
            <h2 className="text-center">{title}</h2>
            {
                todos?.map((todo, index) => (
                    <div className="todo-card" key={index}>{todo} <span className=" cursor-pointer float-right" onClick={() => handleRemove(index)}>X</span></div>
                ))
            }
            <Textarea
                placeholder="要抓的寶可夢"
                variant="bordered"
                labelPlacement="outside"
                className="max-w-xs"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <Button size="sm" onClick={() => handleSetText(text)}>
                新增
            </Button>
        </div>
    )
}

export default Column