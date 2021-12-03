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
        var newName = 'Guest';
        
        if(this.props.userInfo && this.props.userInfo.name && this.props.userInfo.name.length>0) {
            newName = this.props.userInfo.name;
        }
        this.props.handler(this.state.value, newName);
        this.setState({value: ''});
    }
    render() {
        
    return(
    <section id="app">
        <div class="comment-write-container">
          <div class="row">
            <div class="col-6">
            <form onSubmit={this.handleSubmit}>
            <textarea type="text" class="input" placeholder="Write a review" value={this.state.value} onChange={this.handleChange} ></textarea>
              <button class='primaryContained float-right' type="submit">Add Review</button>
            </form></div>
          </div>
        </div>
    </section>);
	}
	
}

export default AddComment;