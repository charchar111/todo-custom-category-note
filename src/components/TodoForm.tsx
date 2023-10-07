import { useEffect, useState } from "react";
import { ErrorMessage, TodoForm1 } from "../component";
import autosize from "autosize";
import { FieldErrors, useForm } from "react-hook-form";
import {
  EnumCategory,
  ITodoAtom,
  TimeoutIdForTodoFormAtom,
  todoAtom,
} from "../atom";
import { useRecoilState } from "recoil";

export default function TodoForm() {
  const [isErrorState, setIsErrorState] = useState(false);
  const [todoState, setTodoState] = useRecoilState(todoAtom);
  const [timeoutId, setTimeoutId] = useRecoilState(TimeoutIdForTodoFormAtom);

  useEffect(() => {
    const inputContext = document.getElementById("todoform__textarea");

    const inputContextCurrent = inputContext;

    if (inputContextCurrent) {
      autosize(inputContextCurrent);
      return () => {
        if (inputContextCurrent) {
          autosize.destroy(inputContextCurrent);
        }
      };
    }
  }, []);

  // useEffect(() => {
  //   const localStorageTodo: string | null = localStorage.getItem("todoList");
  //   if (localStorageTodo !== null) {
  //     setTodoState(JSON.parse(localStorageTodo));
  //   }
  // }, [setTodoState]);

  // useEffect(() => {
  //   if (todoState.length > 0) {
  //     console.log("todo state 변경");
  //     localStorage.setItem("todoList", JSON.stringify(todoState));
  //   }
  // }, [todoState]);

  const {
    register,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm<ITodoAtom>();

  const onValid = function ({ title, content }: ITodoAtom) {
    setTodoState((current) => [
      { title, content, category: EnumCategory.todo, id: Date.now() },
      ...current,
    ]);

    setValue("title", "");
    setValue("content", "");
  };

  const onInvalid = function (error: FieldErrors<ITodoAtom>) {
    clearTimeout(timeoutId);

    setIsErrorState(true);
    const id = setTimeout(() => {
      setIsErrorState(false);
    }, 3000);
    setTimeoutId(id);
  };

  return (
    <TodoForm1 onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        type="text"
        placeholder="write todo title"
        {...register("title", { required: "title is required." })}
      />
      <textarea
        id="todoform__textarea"
        placeholder="write todo content"
        {...register("content")}
      />

      <ErrorMessage
        className={`show ${isErrorState ? "" : "hide"}`}
        data-form="error-state"
      >
        {errors.title ? <span>{errors && errors.title?.message}</span> : null}
      </ErrorMessage>

      <button className="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </TodoForm1>
  );
}
