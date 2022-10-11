
import { useContext } from "react";
import { TodosDispatch } from "../../App";
import { TypeTodo } from "../TodoList/TodoList";
import "./TodoListItem.scss";
interface ITodoListItemProps {
  item: TypeTodo;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({
  item,
}) => {
    const dispatch = useContext(TodosDispatch);

  let className = "todolist__item";

  if (item.isDone) {
    className += " todolist__item_active";
  }

  return (
    <>
      <li className={className}>
        <div
          onClick={() => {
            // setIsDoneHandler(item.id);
            dispatch({type:'setDone', id:item.id});
          }}
          className={'todolist__item-text'}
        >
          {item.text}
        </div>
        

        <div
          className="todolist__item-delete"
          onClick={() => {
            // deleteTodoItemWithIndex(item.id);
            dispatch({type:'remove', id:item.id})
          }}
        >
          X
        </div>

      </li>
    </>
  );
};

export default TodoListItem;
