import React, { Component } from 'react'
import SearchBox from './SearchBox'

const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes'

class App extends Component {
  constructor(){
    super()

    this.state = {
      books : [],
      searchText: '',
      searchItemsCount: 10,
      loading: false,
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
    let query = API_ENDPOINT
    query += `?q=${searchText}`
    query += `&maxResults=${searchItemsCount}`
    return query
  }

  getBooks(){
    //this.setState({loading:true})
    fetch(this.getQuery())
    .then(res => res.json())
    .then(result => {
      this.setState({books:result.items || []})
      //this.setState({loading:false})
    })
  }
  render() {
    return (
      <div>
        <div className="app-title">
          <h2>Welcome to React Books Search <span role="img" aria-label="search">🔍</span></h2>
        </div>
        <div>
          <SearchBox searchText={this.state.searchText} 
                     changeSearchText={this.changeSearchText} 
                     getBooks={this.getBooks}/>

          <pre>
            {
              JSON.stringify(this.state.books,null,4)
            }
          </pre>
        </div>
      </div>
    )
  }
}

export default App
