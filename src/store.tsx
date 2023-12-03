import { atom} from "jotai";

export const todoAtom = atom<string[]>(["皮卡丘"]);

export const doingAtom = atom<string[]>([]);

export const doneAtom = atom<string[]>([]);
