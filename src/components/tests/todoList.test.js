import React from 'react';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { MemoryRouter } from 'react-router-dom';

import { mount, shallow } from 'enzyme';
import { TodoList } from '../TodoList';

// import TodoList from '../TodoList';

const mockStore = configureMockStore();
const store = mockStore({});

const mockTodos = [
    { id: 1, name: 'Load data into app', isComplete: true },
    { name: 'feed goldfish', isComplete: true, id: 10 },
    { name: 'shop for candy', isComplete: true, id: 11 },
    { name: 'buy goldfish', isComplete: false, id: 12 },
    { name: 'shop for golf balls', isComplete: false, id: 13 },
    { name: 'purchase concert tickets', isComplete: false, id: 14 },
];

describe('Testpage Component', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <TodoList />
        </Provider>,
        {
            context: {
                todos: mockTodos,
            },
        },
    );

    it('should render without throwing an error', () => {
        // console.log(wrapper.debug());

        expect(wrapper.find('.Todo-List').length).toEqual(1);

        // expect(
        //     shallow(
        //         <Provider store={store}>
        //             <TodoList />
        //         </Provider>,
        //     ).exists(<h1>Test page</h1>),
        // ).toBe(true);
    });
});

// describe('Name of the group', () => {
//     test('should ', () => {
//         const wrapper = mount(
//             <MemoryRouter>
//                 <TodoList />
//             </MemoryRouter>,
//             { context: { store } },
//         );

//         console.log(wrapper.debug());

//         expect(true).toBe(true);
//     });
// });
