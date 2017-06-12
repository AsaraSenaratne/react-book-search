import React, {Component} from 'react'
import Book from './Book'

class BooksContainer extends Component{
	render(){
		const {books} = this.props
		return(
			<div className="books-container">
				{books.map(b => <Book book={b.volumeInfo} />)}
			</div>
		)
	}
}

export default BooksContainer