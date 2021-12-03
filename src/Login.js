import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', pwd: ''};
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUsernameChange(event) {
        this.setState({username: event.target.value, pwd: this.state.pwd});
    }
    
    handlePwdChange(event) {    
        this.setState({username: this.state.username, pwd:  event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        //this.props.handler(this.state.value, 'Guest');
        //this.setState({value: ''});
        //alert(this.state.username+ " " + this.state.pwd)
        
        if(this.state.pwd.length == 8) {
            var newName, newType;
            if(this.state.username == 'saida.afroj') {
                newName = 'Saida';
                newType = 'user';
            }
            if (this.state.username.startsWith('admin')) {
                newName = 'Mike';
                newType = 'admin';
            }
            this.props.pageHandler('login-succss', {name: newName, type: newType});
            return;
        }
        alert("Invalid username or password");
        this.setState({username: '', pwd: ''});
        
    }
    render() {
        
        return(
        <div>
            <form onSubmit={this.handleSubmit}><br/>
            <center> username: <input type="text" class="input" placeholder="Write username..." value={this.state.username} onChange={this.handleUsernameChange} ></input> </center><br/>
            <center> password: <input type="password" class="input" placeholder="Write password..." value={this.state.pwd} onChange={this.handlePwdChange} ></input> </center><br/>
              <center><button class='primaryContained float-right' type="submit">Submit</button></center>
            </form>
        </div>);
	}
	
}

export default Login;