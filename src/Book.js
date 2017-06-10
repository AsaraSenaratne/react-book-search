import React, {Component} from 'react'
import placeHolder from './logo.svg'

class Book extends Component{
	render(){
		const {book} = this.props
		return(
			<div className="book">
				<h3 className="book-title"> {book.title} </h3>
				<p className="book-authors"> {book.authors ? book.authors.join(',') : '<not provided>'} </p>
				<img alt={book.title} src={book.imageLinks ? book.imageLinks.thumbnail : placeHolder} />
				<p className="book-description"> {book.description ? book.description.substring(0,250) : ''} </p>
			</div>
		)
	}
}

export default Book