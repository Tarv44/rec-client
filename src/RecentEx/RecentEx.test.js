import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import RecentEx from './RecentEx'
import store from '../dummy-store'
import { BrowserRouter } from 'react-router-dom'


describe('----- RecentEx -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <RecentEx exchanges={store.exchanges}/>
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <RecentEx exchanges={store.exchanges}/>
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})