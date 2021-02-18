import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'


describe('----- Login -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <Login />
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <Login />
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})