import React, { useEffect } from "react";
import { EnumCategory, ITodoAtom, todoAtom } from "../atom";
import { useRecoilState } from "recoil";
import { FormUlBtn } from "../component";

export default function TodoList({ id, title, content, category }: ITodoAtom) {
  const [todoState, setTodoState] = useRecoilState(todoAtom);

  const handleClicktodoCategoryBtn = function (
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const name = event.currentTarget.name;
    if (
      !(
        name === EnumCategory.doing ||
        name === EnumCategory.todo ||
        name === EnumCategory.done
      )
    )
      return;
    const newCategory = name;
    const targetIndex = todoState.findIndex((element) => element.id === id);

    setTodoState((current) => {
      const newState = [...current];
      const newObj = { ...newState[targetIndex] };
      newObj.category = newCategory;
      newState.splice(targetIndex, 1, newObj);
      return newState;
    });
  };

  const handleClicktodoDeleteBtn = function () {
    setTodoState((current) => current.filter((e) => e.id !== id));
  };
  return (
    <li>
      <span>{title}</span>
      <div className="btn-box">
        <FormUlBtn
          name="todo"
          $selected={category === "todo" ? true : false}
          onClick={handleClicktodoCategoryBtn}
        >
          to do
        </FormUlBtn>
        <FormUlBtn
          name="doing"
          $selected={category === "doing" ? true : false}
          onClick={handleClicktodoCategoryBtn}
        >
          doing
        </FormUlBtn>
        <FormUlBtn
          name="done"
          $selected={category === "done" ? true : false}
          onClick={handleClicktodoCategoryBtn}
        >
          done
        </FormUlBtn>

        <FormUlBtn onClick={handleClicktodoDeleteBtn}>
          <i className="fa-solid fa-xmark"></i>
        </FormUlBtn>
      </div>
    </li>
  );
}
