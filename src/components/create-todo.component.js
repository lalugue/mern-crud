import React, {Component} from 'react';

//export a single class (default export)
export default class CreateTodo extends Component{

    constructor(props){
        super(props);

        this.state={
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed: false
        }
    }

    render(){
        return(
            <div>
            <p>Welcome to the CreateTodo component!</p>
            </div>
        )
    }
}