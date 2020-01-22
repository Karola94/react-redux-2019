export const ADD_BOOK = "ADD_BOOK";

const initialState = {
  books: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newBooks = [...state.books, action.payload];
      return {
        ...state,
        books: newBooks
      };
    }
    default: {
      console.warn(`Unknown action ${action.type}`);
      return { ...state };
    }
  }
};

export const addBook = book => dispatch => {
  dispatch({ type: ADD_BOOK, payload: book });
};
