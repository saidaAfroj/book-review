import React from "react";
import ImageSelect from "./img/imageSelect";
import Comments from "./assets/comments";
import EachComment from './EachComment';
import AddComment from './AddComment';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {comments: Comments.sort(function(a, b) {
                        return b.daysAgo - a.daysAgo;
                     })};
        
        this.addComment = this.addComment.bind(this);
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
    
    showBookInfo() {
        return(
        <div class="book_container_child">
            <h2>Author: {this.props.book.author}</h2>
            <h3>Category: {this.props.book.category}</h3>
            <h3>Rating: {this.props.book.ratings}</h3>
            <h4>Summary: {this.props.book.summary}</h4>
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
        <AddComment handler={this.addComment}/>
    </div>);
	}
	
}

export default BookDetails;