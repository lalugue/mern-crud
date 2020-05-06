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

    onSubmit(e){
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
            <div style={{marginTop:10}}>
                <h3>Create new Todo</h3>
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
                    </div>
                </form>
            </div>
        )
    }
}