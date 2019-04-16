import React from 'react';

import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('A footer component should', () => {
    test('should have three links ', () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.find('Link').length).toEqual(3);

        let firstLink = wrapper
            .find('Link')
            .first()
            .children();

        expect(firstLink.text()).toEqual('All');

        let secondLink = wrapper
            .find('Link')
            .at(1)
            .children();

        expect(secondLink.text()).toEqual('Active');

        let thirdLink = wrapper
            .find('Link')
            .last()
            .children();

        expect(thirdLink.text()).toEqual('Completed');
    });
});
