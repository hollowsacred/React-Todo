
export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      if (!action.text) {
        return state;
      }

       return [...state, { text: action.text, isDone: false, id: Date.now() }];
      
      case 'remove':
        return state.filter((todo: Record<string,number>) => todo.id !== action.id);

      case 'setDone':
        const changedTodo = state.find((todo: any) => todo.id === action.id);
        const changedTodoIndex = state.findIndex((todo: any) => todo.id === action.id);
        changedTodo!.isDone = !changedTodo!.isDone;
        return [
          ...state.slice(0, changedTodoIndex),
          changedTodo!,
          ...state.slice(changedTodoIndex + 1),
        ];
  }
}