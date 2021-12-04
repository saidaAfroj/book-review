import React from "react";
import ImageSelect from "./img/imageSelect";
import Comments from "./assets/comments";
import EachComment from './EachComment';
import AddComment from './AddComment';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        
        this.addComment = this.addComment.bind(this);
        this.state = {comments: this.getInitialComments()};
    }
    
    getNumFromString (str) {
        var sum = 0;
        for(var i=0; i<str.length;i++)
        {
            sum += str.charCodeAt(i);
        }
        return sum;
    }
    
    getSeed() {
        return this.getNumFromString(this.props.book.summary) + this.getNumFromString(this.props.book.name);
    }
    
    getInitialComments(){
        const returnedComments = [];
        var seed = this.getSeed();
        var daySeed = seed;
        for(var i=0; seed >0 && i<Comments.length; i+=3) {
            var now = seed%3;
            seed = Math.floor(seed/3);
            
            if(now <3 && i+now <Comments.length ){
                returnedComments.push(Comments[i+now]);
            }                
        }
        
        return returnedComments.sort(function(a, b) {
                    return b.daysAgo - a.daysAgo;
                });
    }
    
    addComment(comment, name){
        this.setState(previousState => ({
            comments: [...previousState.comments,
            {
                name: name,
                daysAgo: 0,
                comment: comment
            }].sort(function(a, b) {
                        return b.daysAgo - a.daysAgo;
                     })
        }));
    }
    
    getRatings(){
        if(this.props.book.ratings) return (<h3>Rating: {this.props.book.ratings}</h3>);
        
        
        return (<h3>Rating: {(20 + Math.floor(Math.random() * 30))/10.0}</h3>);
    }
    getSummary(){
        if(this.props.book.summary && this.props.book.summary.length > 5) return (<h4>Summary: {this.props.book.summary}</h4>);
        
        
        return;
    }
    
    showBookInfo() {
        return(
        <div class="book_container_child">
            <h2>Author: {this.props.book.author}</h2>
            <h3>Category: {this.props.book.category}</h3>
            {this.getRatings()}
            {this.getSummary()}
        </div>);
        
    }
    
    showComments() {
        const fetchedComments = [];
        for(var i=0; i<this.state.comments.length; i++)
        {
            fetchedComments.push(<EachComment comment={this.state.comments[i]}/>)
        }
        
        return(
            <div id="w">
            <div id="comment-read-container" style={{position: 'relative' ,bottom: 0 }}>
            <ul id="comments">
                {fetchedComments}
            </ul></div></div>);
    }    
    
    render() {
        
    return(
    <div>
        <center><h1>{this.props.book.name}</h1></center>
        <div class="book_detail_container">
        <div class="book_container_child"> </div>
        <div class="book_container_child">
            <center><img src={ImageSelect(this.props.book.imageName)} alt="" width="285" height="360" id="book1"/></center>
        </div>
        {this.showBookInfo()}
        <div class="book_container_child"> </div>
        </div>
        {this.showComments()}
        <AddComment handler={this.addComment} userInfo={this.props.userInfo}/>
    </div>);
	}
	
}

export default BookDetails;