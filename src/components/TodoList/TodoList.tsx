import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.scss";
export type TypeTodo = {
  text: string;
  isDone: boolean;
  id:number;
};

interface ITodoListProps {
  todos: TypeTodo[];
}


const TodoList: React.FC<ITodoListProps> = ({
  todos,
}) => {
  return (
    <ul className="todolist">
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item}/>

      ))}
    </ul>
  );
};

export default TodoList;
