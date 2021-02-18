import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Signup from './Signup'
import { BrowserRouter } from 'react-router-dom'


describe('----- Signup -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <Signup />
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <Signup />
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})