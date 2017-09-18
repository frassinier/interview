import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

import brands from './db/brands';
import phones from './db/phones';

const data = { brands, phones };

describe('App', () => {

	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App data={data}/>, div);
	});

	it('should get Apple phone names', () => {
		// given
		const fakeBrand = { id: 3, name: 'Apple' };
		const expectedApplePhoneNamesOrderedByNameDesc = [
			"iPhone SE",
			"iPhone 7 Plus",
			"iPhone 7",
			"iPhone 6s Plus",
			"iPhone 6s",
			"iPhone 5s",
		];

		// when
		const wrapper = shallow(<App data={data}/>);
		const result = wrapper.instance().getPhonesBy(fakeBrand);

		// then
		expect(result.map(phone => phone.name)).toEqual(expectedApplePhoneNamesOrderedByNameDesc);
	});
});
