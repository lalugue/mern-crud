import React, {Component} from 'react';
import axios from 'axios';
import * as constants from "./constants"

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
        
         //bind all component's functions to this component
         this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
         this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
         this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
         this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

    }

    //when a component is loaded, do this
    componentDidMount(){
        console.log('this is the props for editing: ')
        console.log(this.props)
        //the specific props location can be seen in developer console
        axios.get(constants.API_GET + '/' + this.props.match.params.id)
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

    //utility functions
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

    onChangeTodoCompleted(e){        
        this.setState({
            todo_completed: !this.state.todo_completed
        })
    }

    onSubmit(e){
        //prevent default behavior or HTML form submit
        e.preventDefault();

        console.log("Form submitted: ");
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Resposible: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)

        const newTodo = {
            todo_description : this.state.todo_description,
            todo_responsible : this.state.todo_responsible,
            todo_priority : this.state.todo_priority,
            todo_completed : this.state.todo_completed
        }

        axios.post(constants.API_UPDATE + '/' + this.props.match.params.id,newTodo)
             .then(res => console.log(res.data))

        //clean up form after submission
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })

        this.props.history.push('/')
        //update page by using location.reload() on native window object
        window.location.reload()
    }
  
    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Edit Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                       <label>Description: </label> 
                       <input type="text" className="form-control" value={this.state.todo_description} onChange={this.onChangeTodoDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.todo_responsible}
                        onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority==='Low'}
                                onChange={this.onChangeTodoPriority} />
                                <label className="form-check-label">Low</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeTodoPriority} />
                                <label className="form-check-label">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority} />
                                <label className="form-check-label">High</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input"
                                            id="completedCheckbox"
                                            type="checkbox"
                                            name="completedCheckbox"
                                            onChange={this.onChangeTodoCompleted}
                                            checked={this.state.todo_completed}
                                            value={this.state.todo_completed}
                                            />
                                <label className="form-check-label" htmlFor="completedCheckbox">Completed?</label>                               
                            </div>
                    </div>
                    
                    <br/>

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-warning"/>
                    </div>
                </form>
            </div>
        )
    }
}