import React, {Component} from 'react';

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: ''
        }
    };

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    };

    handleSubmit(event){
        event.preventDefault();
        this.props.addTodo(this.state.inputText);
        this.clearInput();
    };

    clearInput(){
        this.setState({
            inputText: ""
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="some text" value={this.state.inputText}
                       onChange={this.handleChange.bind(this)}/>
                <input type="submit"/>
            </form>
        )
    };
}

export default TodoInput;

