import React, {Component} from 'react'


class Book extends Component{
	render(){
		const {book} = this.props
		return(
			<div>
				<h3> {book.title} </h3>
				<p> {book.authors ? book.authors.join(',') : '<not provided>'} </p>
				<img src={book.imageLinks.thumbnail} />
				<p> {book.description} </p>
			</div>
		)
	}
}

export default Book