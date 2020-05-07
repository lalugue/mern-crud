import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//export a single class (default export)
export default class TodosList extends Component{

    constructor(props){
        super(props);
        this.state = {todos: []};
    }

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

    render(){
        return(
            <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{marginTop:20}}>
                
            </table>
            </div>
        )
    }
}