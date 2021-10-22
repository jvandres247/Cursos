import {TodoList, Todo} from './classes'
import { crearTodoHTML } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHTML(todo));

const newTodo = new Todo('Aprender JS');
todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);
