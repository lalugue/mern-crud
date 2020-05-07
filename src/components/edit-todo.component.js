import React, {Component} from 'react';
import axios from 'axios';
//export a single class (default export)
export default class EditTodo extends Component{

    constructor(props){
        super(props)

        this.state={
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed: false
        }

    }

    //when a component is loaded, do this
    componentDidMount(){
        console.log('this is the props for editing: ')
        console.log(this.props)
        //the specific props location can be seen in developer console
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(res=>{
                this.setState({
                    todo_description: res.data.todo_description,
                    todo_responsible: res.data.todo_responsible,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed
                })
            })
            .catch(err=>{
                console.log("error detected while fetching props for update:")
                console.log(err)
            })
    }

    render(){
        return(
            <div>
            <p>Welcome to the EditTodo component!</p>
            </div>
        )
    }
}