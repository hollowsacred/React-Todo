
import { TypeTodo } from "../TodoList/TodoList";
import "./TodoListItem.scss";
interface ITodoListItemProps {
  item: TypeTodo;
  setIsDoneHandler: (id: number) => void;
  deleteTodoItemWithIndex: (id: number) => void;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({
  item,
  setIsDoneHandler,
  deleteTodoItemWithIndex,
}) => {
  let className = "todolist__item";

  if (item.isDone) {
    className += " todolist__item_active";
  }

  return (
    <>
      <li className={className}>
        <div
          onClick={() => {
            setIsDoneHandler(item.id);
          }}
          className={'todolist__item-text'}
        >
          {item.text}
        </div>
        

        <div
          className="todolist__item-delete"
          onClick={() => {
            deleteTodoItemWithIndex(item.id);
          }}
        >
          X
        </div>

      </li>
    </>
  );
};

export default TodoListItem;
