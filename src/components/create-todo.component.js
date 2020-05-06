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

        //bind all component's functions to this component
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmite(e){
        //prevent default behavior or HTML form submit
        e.preventDefault();

        console.log("Form submitted: ");
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Resposible: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)

        //clean up form after submission
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    

    render(){
        return(
            <div>
            <p>Welcome to the CreateTodo component!</p>
            </div>
        )
    }
}