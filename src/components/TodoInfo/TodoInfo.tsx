import React from 'react';
import { UserInfo } from '../UserInfo';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

type Props = {
  todo: Todo;
  users: User[];
};

export const TodoInfo: React.FC<Props> = ({ todo, users }) => {
  const author = users.find(user => user.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={author} />
    </article>
  );
};
