import JavaScript from './JavaScript';
import PathParameters from './PathParameters';
import Classes from './Classes/index';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoList from './todo/TodoList';

const Assignment3 = () => {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
};
export default Assignment3;
