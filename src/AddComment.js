import React from "react";

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.handler(this.state.value, 'Guest');
        this.setState({value: ''});
    }
    render() {
        
    return(
    <section id="app">
        <div class="comment-write-container">
          <div class="row">
            <div class="col-6">
            <form onSubmit={this.handleSubmit}>
            <textarea type="text" class="input" placeholder="Write a comment" value={this.state.value} onChange={this.handleChange} ></textarea>
              <button class='primaryContained float-right' type="submit">Add Comment</button>
            </form></div>
          </div>
        </div>
    </section>);
	}
	
}

export default AddComment;