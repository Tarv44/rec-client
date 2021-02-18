import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom'


describe('----- Nav -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <Nav />
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <Nav />
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})