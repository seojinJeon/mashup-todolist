import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';
import {useState} from 'react';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  let [하트, 하트변경] = useState(0);

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          heart=<span onClick = {()=>{하트변경(하트+1)}}>💚</span>
          done={todo.done}

        />
      ))}
    </TodoListBlock>
    
  );
}

export default TodoList;