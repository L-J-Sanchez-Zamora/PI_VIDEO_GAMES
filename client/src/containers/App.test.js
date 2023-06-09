import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders without error', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });
});



/*import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './App';
import HomePage from '../components/HomePage/HomePage';
import LandingPage from '../components/LandingPage/LandingPage'
//import TodoDetail from './components/TodoDetail/TodoDetail';

//import Nav from './components/Nav/Nav';

configure({adapter: new Adapter()});

describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('El componente Nav debe renderizar en todas las rutas.', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Nav)).toHaveLength(1);
    });
   });*/

  // it('El componente Home debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
  //   const wrapper = mount(
  //       <Provider store={store}>
  //         <MemoryRouter initialEntries={[ '/' ]}>
  //           <App />
  //         </MemoryRouter>
  //       </Provider>
  //   );

  //     expect(wrapper.find(Home)).toHaveLength(1);
  //     expect(wrapper.find(Nav)).toHaveLength(1);
  //     expect(wrapper.find(AddTodo)).toHaveLength(0);
  // });

  // it('El componente AddTodo debe renderizar en la ruta /add - este test no pasará si Otro componente (que no sea Nav) se renderiza en esta ruta.', () => {
  //   const container = mount(
  //       <Provider store={store}>
  //         <MemoryRouter initialEntries={[  '/add' ]}>
  //           <App />
  //         </MemoryRouter>
  //       </Provider>
  //   );
  //   expect(container.find(Nav)).toHaveLength(1);
  //   expect(container.find(Home)).toHaveLength(0);
  //   expect(container.find(AddTodo)).toHaveLength(1);
  // });

//});
