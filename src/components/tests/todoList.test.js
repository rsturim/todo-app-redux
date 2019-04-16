import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import TodoList from '../TodoList';

describe('Name of the group', () => {
    test('should ', () => {
        const wrapper = mount(
            <MemoryRouter>
                <TodoList />
            </MemoryRouter>,
        );

        console.log(wrapper.debug());

        expect(true).toBe(true);
    });
});
