// Dumb component because it doesn't have any direct connection to redux
// Smart component has a connection to redux

//Container is just a component that has direct access to the state that's produced by redux

import React, { Component } from 'react';

export default class BookList extends Component{
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