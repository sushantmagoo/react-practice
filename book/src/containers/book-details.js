import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get Started!</div>
    }
    return (
      <div>
        <h3>Book Title
        </h3>
        <div>
          {this.props.book.title}
        </div>
        <h3>Book Pages
        </h3>
        <div>
          {this.props.book.pages}
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStatetoProps)(BookDetail);
