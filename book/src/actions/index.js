export function selectBook(book){
  // Selectbook is an action creator, it needs to return
  // an action, an object with a type property.
  console.log('A book has been selected: ', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
