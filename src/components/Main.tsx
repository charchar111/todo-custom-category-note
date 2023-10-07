import { useRecoilState } from "recoil";
import TodoForm from "./TodoForm";
import { Section, Tabs } from "../component";
import { ITodoAtom, tabAtom, todoAtom } from "../atom";

import { useEffect } from "react";
import FormUls from "./FormUl";

export default function Main() {
  const [todoState, setTodoState] = useRecoilState(todoAtom);
  const [tabState, setTabState] = useRecoilState(tabAtom);

  let localStorageTodo: ITodoAtom[] | undefined;

  useEffect(() => {
    const localTodo = localStorage.getItem("todoList");
    if (localTodo !== null) {
      localStorageTodo = JSON.parse(localTodo);
      if (localStorageTodo !== undefined) {
        setTodoState(localStorageTodo);
      }
    }
  }, [setTodoState]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoState));
  }, [todoState]);

  return (
    <main>
      <Tabs>
        <div className="tab">
          <button onClick={() => setTabState("list")}>LIST</button>
        </div>
        <div className="space"></div>
        <div className="tab">
          <button onClick={() => setTabState("add")}>ADD</button>
        </div>
      </Tabs>
      <Section $bgcolor="white">
        {tabState === "list" ? <FormUls /> : <TodoForm />}
      </Section>
    </main>
  );
}
