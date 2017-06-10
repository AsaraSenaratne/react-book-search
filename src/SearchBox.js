import React, {Component} from 'react'


class SearchBox extends Component{

	constructor(){
		super()
		this.changeText = this.changeText.bind(this)
	}

	changeText(event){
		const {changeSearchText} = this.props
		changeSearchText(event.target.value)
	}
	render(){
		return(
			<div>
				<div className="search-box">
					<div>
						<input className="search-box__input"
							   placeholder='enter a book name' 
							   size="23"
							   type='text' 
							   onChange={this.changeText} 
							   value={this.props.searchText} />
						<button className="search-box__button" onClick={this.props.getBooks}> Search </button>
					</div>

				</div>
				<div className="search-settings">
					<span> Results Count </span> <input type='text' size='3' />
				</div>
			</div>
		)
	}
}

export default SearchBox