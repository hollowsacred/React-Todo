import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.scss";
export type TypeTodo = {
  text: string;
  isDone: boolean;
  id:number;
};

interface ITodoListProps {
  todos: TypeTodo[];
  deleteTodoItemWithIndex: (id: number) => void;
  setIsDoneHandler: (id: number) => void; 
}


const TodoList: React.FC<ITodoListProps> = ({
  todos,
  deleteTodoItemWithIndex,
  setIsDoneHandler
}) => {
  return (
    <ul className="todolist">
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} setIsDoneHandler={setIsDoneHandler} deleteTodoItemWithIndex={deleteTodoItemWithIndex}/>

      ))}
    </ul>
  );
};

export default TodoList;
