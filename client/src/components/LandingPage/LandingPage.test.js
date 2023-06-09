import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingPage from './LandingPage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('LandingPage', () => {
  test('renders without error', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const landingPageElement = screen.getByTestId('landing-page');
    expect(landingPageElement).toBeInTheDocument();
  });

  test('dispatches actions on mount', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    expect(mockDispatch).toHaveBeenCalledTimes(3);
  });
});
/*import React, {useState} from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';
import configureStore from "redux-mock-store";
import {useDispatch} from 'react-redux';


configure({adapter: new Adapter()});

describe('<Landing Page />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LandingPage/>);
    })
     it('Renderiza un boton con el "type" "submit"', () => {
       expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
    })*/

  //   it('Renderiza un label con el texto igual a "Description:"', () => {
  //     expect(wrapper.find('label').at(0).text()).toEqual('Description:');
  //   })

  //   it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
  //     expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
  //   })

  //   it('Renderiza un label con el texto igual a "Game Name:"', () => {
  //     // El orden en el que se encuentran los Labels es importante.
  //     expect(wrapper.find('label').at(1).text()).toEqual('Game Name:');
  //   })

  //   it('Renderiza un input con la propiedad "name" igual a "name"', () => {
  //     expect(wrapper.find('input[name="title"]')).toHaveLength(1);
  //   })

  //   it('Renderiza un label con el texto igual a "Released date:"', () => {
  //      expect(wrapper.find('label').at(2).text()).toEqual('reldate');
  //   })
  
   
  // })

//});