import { useRef, useContext } from "react";
import { TodosDispatch } from "../../App";

import "./AddItemPanel.scss";

interface AddItemPanelProps {
}

const AddItemPanel: React.FC<AddItemPanelProps> = () => {
  const textRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useContext(TodosDispatch);
  return (
    <form
      className="form-add-panel"
      onSubmit={(e) => e.preventDefault()}
      action=""
    >
      <input type="text" placeholder="write something......." ref={textRef} />
      <button
        onClick={() => {
          // addTodoItem(textRef.current?.value);
          dispatch({type:"add", text:textRef.current?.value});
          textRef.current!.value = "";
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddItemPanel;
