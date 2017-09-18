import React, { Component } from 'react';

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);

		const { brands, phones } = props.data;
		this.brands = brands;
		this.phones = phones;

		this.getPhonesBy = this.getPhonesBy.bind(this);
		this.renderBrandName = this.renderBrandName.bind(this);
		this.renderPhoneName = this.renderPhoneName.bind(this);
	}

	/**
	 * Render brand name
	 * @param brand
	 * @returns {JSX} Brand name
	 */
	renderBrandName(brand) {
		return <h1>{brand.name}</h1>
	}

	/**
	 * Render phones by brand
	 * @param brand
	 * @returns {Array} Phones grouped by brand ordered by name DESC
	 */
	getPhonesBy(brand) {
		const orderByName = (a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		};
		// TODO Phone models need to be grouped by brand and ordered by name desc
		return this.phones;
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Phones catalog</h2>
				</div>
				<div className="row-fluid">
					<div className="col-md-offset-3 col-md-6">
						<div className="well well-sm">
							<div className="clearfix">
								{
									// This is valid since I can not return two HTML elements without root with JSX
									this.brands.reduce((acc, brand) => acc.concat([
										this.renderBrandName(brand),
										this.getPhonesBy(brand)
											.forEach(phone => {
												// FIXME No output here, I'm wondering why?
												// console.log(phone);
												return (
													<div>
														<label>{phone.name}</label>
													</div>
												)
											})
									]), [])
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	/**
	 * Render phone name
	 * @param phone
	 * @returns {JSX} Phone name
	 */
	renderPhoneName(phone) {
		return <div>{phone.name}</div>
	}
}

export default App;
