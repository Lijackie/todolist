'use client';

import Column from '@/components/Column';
import { todoAtom, doingAtom, doneAtom } from '@/store';

const page = () => {
  const todoTitles = [{ title: "要抓的", atom: todoAtom }, { title: "進行中", atom: doingAtom }, { title: "已抓到", atom: doneAtom }];


  return (
    <div className='flex justify-center space-x-5'>
      {
        todoTitles.map((todoTitle) => (
          <Column key={todoTitle.title} title={todoTitle.title} atom={todoTitle.atom} />
        ))
      }
    </div>

  )
}

export default page