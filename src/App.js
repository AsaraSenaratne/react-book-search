import React, { Component } from 'react'
import SearchBox from './SearchBox'
import BooksContainer from './BooksContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchText: '',
      searchItemsCount: 5,
      books : []
    }

    this.getBooks = this.getBooks.bind(this)
    this.getQuery = this.getQuery.bind(this)
    this.changeSearchText = this.changeSearchText.bind(this)
  }

  changeSearchText(text){
    this.setState({searchText:text})
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
          <SearchBox changeSearchText={this.changeSearchText} 
                     searchText={this.state.searchText} 
                     getBooks={this.getBooks}/>

          <BooksContainer books={this.state.books} />
        </div>
      </div>
    )
  }
}

export default App
