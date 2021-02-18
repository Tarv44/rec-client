import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import RotationContext from '../RotationContext'


describe('----- App -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <App />
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <App />
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})