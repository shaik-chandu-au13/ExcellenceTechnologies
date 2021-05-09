import React, { Component } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:"",
            data:[]}
    }

    onChangeHandler=(e)=>{
        this.setState({todos:e.target.value})
    }

    onClickHandler =(e)=>{
        e.preventDefault()
        if(this.state.todos!==''){
        this.setState({
            data: [ 
                ...this.state.data,
                {
                    
                    todo: this.state.todos,
                    
                }
            ],
            todos:''
                        
        })}else{
            alert("enter a todo before you add!")
        }

    }
    render() {
        return (
            <>
            <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Todos</span>
          <div>
              <TodoInput value={this.state.todos} onChangeHandler={this.onChangeHandler} onClickHandler={this.onClickHandler}/>
                
        </div>
        
        {this.state.data.map((v,i) => {
                    return <TodoItem key={i} content= {v.todo} />
                })
                }
        
      </div>
    </div>
  </div>
            
                
                

            </div></>
        )
    }
}
