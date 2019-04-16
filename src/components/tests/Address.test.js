import React from 'react';

import { shallow } from 'enzyme';

import Address from '../Address';

describe('An Address component should be able to ', () => {
    it('render an address', () => {
        const wrapper = shallow(<Address />);

        expect(wrapper.find('div').text()).toEqual('address');
    });
});
