import { atom, selector } from "recoil";
import { pinkTheme, blueTheme } from "./theme";
import { DefaultTheme } from "styled-components";

export const themeAtom = atom<DefaultTheme>({
  key: "themeState",
  default: pinkTheme,
});

export const tabAtom = atom<"list" | "add">({
  key: "tabState",
  default: "add",
});

export enum EnumCategory {
  todo = "todo",
  doing = "doing",
  done = "done",
}

export interface ITodoAtom {
  id: number;
  title: string;
  content: string;
  category: EnumCategory;
}

export const todoAtom = atom<ITodoAtom[]>({ key: "todoState", default: [] });

export const TimeoutIdForTodoFormAtom = atom<undefined | NodeJS.Timeout>({
  key: "TimeoutIdForTodoFormState",
  default: undefined,
});

export const categoryAtom = atom<ITodoAtom["category"]>({
  key: "categoryState",
  default: EnumCategory.todo,
});

export const todoSelecter = selector({
  key: "todoSelecterState",
  get: ({ get }) => {
    const todoState = get(todoAtom);
    const categoryState = get(categoryAtom);
    return todoState.filter((e) => e.category === categoryState);
  },
});
