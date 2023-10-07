import { useRecoilValue, useSetRecoilState } from "recoil";

import { FormUl, Tabs } from "../component";
import {
  EnumCategory,
  ITodoAtom,
  categoryAtom,
  todoAtom,
  todoSelecter,
} from "../atom";
import TodoList from "./TodoLi";

interface MyComponentProps {
  localStorageTodo: ITodoAtom[];
}

export default function FormUls() {
  const todoState = useRecoilValue(todoSelecter);
  const setCategoryState = useSetRecoilState(categoryAtom);

  return (
    <FormUl>
      <Tabs>
        <div className="tab">
          <button onClick={() => setCategoryState(EnumCategory.todo)}>
            To do
          </button>
        </div>
        <div className="space"></div>
        <div className="tab">
          <button onClick={() => setCategoryState(EnumCategory.doing)}>
            Doing
          </button>
        </div>
        <div className="space"></div>
        <div className="tab">
          <button onClick={() => setCategoryState(EnumCategory.done)}>
            Done
          </button>
        </div>
      </Tabs>
      {/* {localStorageTodo?.map((element, index) => (
        <TodoList key={index} {...element} />
      ))} */}
      {todoState?.map((element, index) => (
        <TodoList key={index} {...element} />
      ))}
    </FormUl>
  );
}
