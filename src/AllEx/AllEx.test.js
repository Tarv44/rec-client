import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import AllEx from './AllEx'
import store from '../dummy-store'
import { BrowserRouter } from 'react-router-dom'


describe('----- AllEx -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <AllEx exchanges={store.exchanges}/>
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <AllEx exchanges={store.exchanges}/>
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})