import React, {Component} from 'react'
import Book from './Book'

class BooksContainer extends Component{
	constructor(){
		super()
	}
	render(){
		const {books} = this.props
		return(
			<div>
				{books.map(b => <Book book={b.volumeInfo} />)}
			</div>
		)
	}
}

export default BooksContainer