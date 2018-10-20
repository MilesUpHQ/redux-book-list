// Dumb component because it doesn't have any direct connection to redux
// Smart component has a connection to redux

//Container is just a component that has direct access to the state that's produced by redux

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  // Takes the state of the application as argument
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList)