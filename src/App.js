import React, { Component } from 'react'
import SearchBox from './SearchBox'
import BooksContainer from './BooksContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchText: 'Zero To One',
      searchItemsCount: 5,
      books : []
    }

    this.getBooks = this.getBooks.bind(this)
    this.getQuery = this.getQuery.bind(this)
  }

  componentDidMount(){
    this.getBooks()
  }

  getQuery(){
    const {searchText, searchItemsCount} = this.state
    let query = `https://www.googleapis.com/books/v1/volumes`
    query += `?q=${searchText}`
    query += `&maxResults=${searchItemsCount}`
    return query
  }

  getBooks(){
    fetch(this.getQuery())
    .then(res => res.json())
    .then(result => {
      this.setState({books:result.items})
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Books Search</h2>
          <SearchBox />

          <BooksContainer />
        </div>
      </div>
    )
  }
}

export default App
