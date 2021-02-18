import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Landing from './Landing'
import { BrowserRouter } from 'react-router-dom'


describe('----- Landing -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <Landing />
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <Landing />
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})