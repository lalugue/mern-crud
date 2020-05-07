import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//define a Todo component for internal TodosList usage
//this is a row in the table component
//._id is id property in MongoDB
const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td><Link to={"/edit/"+props.todo._id}>Edit</Link></td>
    </tr>
)

//export a single class (default export)
export default class TodosList extends Component{

    constructor(props){
        super(props);
        this.state = {todos: []};
    }

    //fetch todos from backend
    componentDidMount(){
        axios.get('http://localhost:4000/todos')
            .then(res => {
                this.setState({todos: res.data})
            })
            .catch(err => {
                console.log('an error occurred while fetching')
                console.log(err)
            })
    }

    todoList() {
        return this.state.todos.map((currentTodo,i)=>{
            return <Todo todo={currentTodo} key={i}/>
        })
    }

    render(){
        return(
            <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Responsible</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.todoList()}
            </tbody>
            </table>
            </div>
        )
    }
}