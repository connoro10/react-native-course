import React, {Component} from 'react';

class Component1 extends Component {
	constructor(){
		super();
		this.state = {
			showMessage: true
		}
	}

	componentWillMount(){
		this.setState({
			showMessage: false
		});
	}

	showMessage(){
		this.setState({
			showMessage: true
		});
	}
	render(){
		return (
			<div>
				<button onClick={this.showMessage.bind(this)}> Show Text </button>
				<h1>{this.state.showMessage ? this.props.message : ''}</h1>
			</div>
			);
	}
}
export default Component1;