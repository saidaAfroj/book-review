import React from "react";
import ReactDOM from 'react-dom';
import Images from "./img/index";

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
    
    imageSelect = imageName => {
      if (imageName === null) {
        return Images.logos.other;
      }
      const imageArray = {
        'image1': Images.image1,
        'image2': Images.image2,
        'image3': Images.image3,
        'image4': Images.image4,
        'image5': Images.image5,
        'image6': Images.image6,
      };
      return imageArray[imageName];
    };
    
    render() {
        return(
        <div class="column" onClick={() => this.props.pageHandler('detail', this.props.book)}>
        <a href="#">
          <div class="container">
            <img src={this.imageSelect(this.props.book.imageName)} class="image"/>
            <div class="overlay">
              <div class="text">{this.props.book.name}</div>
            </div>
          </div>
        </a>
      </div>
        );
    }
}

export default BookDisplayTable;