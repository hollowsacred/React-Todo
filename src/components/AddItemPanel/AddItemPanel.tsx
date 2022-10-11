import { useRef } from "react";

import "./AddItemPanel.scss";

interface AddItemPanelProps {
  addTodoItem: (todoText: any) => void;
}

const AddItemPanel: React.FC<AddItemPanelProps> = ({ addTodoItem }) => {
  const textRef = useRef<HTMLInputElement | null>(null);
  
  return (
    <form
      className="form-add-panel"
      onSubmit={(e) => e.preventDefault()}
      action=""
    >
      <input type="text" placeholder="write something......." ref={textRef} />
      <button
        onClick={() => {
          addTodoItem(textRef.current?.value);
          textRef.current!.value = "";
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddItemPanel;
