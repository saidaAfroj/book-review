import React from "react";
import ReactDOM from 'react-dom';
import ImageSelect from "./img/imageSelect";

class BookDisplayTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderBookTable(){
        
        const items_0_2 = [];
        const items_3_5 = [];
        const items_6_8 = [];
        
        if (this.props.bookList.length >0 ) items_0_2.push(<PerBookDisplay book={this.props.bookList[0]} pageHandler={this.props.pageHandler}/>);
        if (this.props.bookList.length >1 ) items_0_2.push(<PerBookDisplay book={this.props.bookList[1]} pageHandler={this.props.pageHandler}/>);
        if (this.props.bookList.length >2 ) items_0_2.push(<PerBookDisplay book={this.props.bookList[2]} pageHandler={this.props.pageHandler}/>);
        
        if (this.props.bookList.length >3 ) items_3_5.push(<PerBookDisplay book={this.props.bookList[3]} pageHandler={this.props.pageHandler}/>);
        if (this.props.bookList.length >4 ) items_3_5.push(<PerBookDisplay book={this.props.bookList[4]} pageHandler={this.props.pageHandler}/>);
        if (this.props.bookList.length >5 ) items_3_5.push(<PerBookDisplay book={this.props.bookList[5]} pageHandler={this.props.pageHandler}/>);
        
        if (this.props.bookList.length >6 ) items_6_8.push(<PerBookDisplay book={this.props.bookList[6]} pageHandler={this.props.pageHandler}/>);
        if (this.props.bookList.length >7 ) items_6_8.push(<PerBookDisplay book={this.props.bookList[7]} pageHandler={this.props.pageHandler}/>);
        if (this.props.bookList.length >8 ) items_6_8.push(<PerBookDisplay book={this.props.bookList[8]} pageHandler={this.props.pageHandler}/>);
        
        if (items_6_8.length > 0 )
            return(<div>
        <div class="row">{items_0_2}</div>
        <div class="row">{items_3_5}</div>
        <div class="row">{items_6_8}</div>
        </div>);
        
        if(items_3_5.length >0)
            return(<div>
        <div class="row">{items_0_2}</div>
        <div class="row">{items_3_5}</div>
        </div>);
        
        return(<div><div class="row">{items_0_2}</div></div>);
    }
    
    render() {    
	return(
    <section>
        <div class="rt-container">
            <div class="col-rt-12">
                <div class="Scriptcontent">
              
                
                {this.renderBookTable()}
           
                </div>
            </div>
        </div>
    </section>);
    }
	
}

class PerBookDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    
    showInfo(givenBook){
        return(
        <div class="overlay"><div class="text">
            <h2>{givenBook.name}</h2>
            <h3>Author: {givenBook.author}</h3>
            <h3>Rating: {givenBook.ratings}</h3>
        </div></div>);
    }
    
    render() {
        return(
        <div class="column" onClick={() => this.props.pageHandler('detail', this.props.book)}>
        <a href="#">
          <div class="container">
            <img src={ImageSelect(this.props.book.imageName)} width="380" height="480" alt="Book cover not available" />
            {this.showInfo(this.props.book)}
          </div>
        </a>
      </div>
        );
    }
}

export default BookDisplayTable;