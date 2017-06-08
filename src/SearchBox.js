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
				<div>
					<input type='text' onChange={this.changeText} value={this.props.searchText} />
					<button onClick={this.props.getBooks}> Search </button>
				</div>
			</div>
		)
	}
}

export default SearchBox