import React, {Component} from 'react'
import placeHolder from './logo.svg'

class Book extends Component{
	render(){
		const {book} = this.props
		return(
			<div className="book">
				<h3> {book.title} </h3>
				<p> {book.authors ? book.authors.join(',') : '<not provided>'} </p>
				<img src={book.imageLinks ? book.imageLinks.thumbnail : placeHolder} />
				<p> {book.description ? book.description.substring(0,250) : ''} </p>
			</div>
		)
	}
}

export default Book