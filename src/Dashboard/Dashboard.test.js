import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'
import store from '../dummy-store'
import { BrowserRouter } from 'react-router-dom'
import RotationContext from '../RotationContext'


describe('----- Dashboard -----', () => {

    const context = {
        current_user: {
            id: 1,
            username: 'user'
        },
        current_exchanges: store.exchanges
    }
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <RotationContext.Provider value={context}>
                    <Dashboard />
                </RotationContext.Provider>
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <RotationContext.Provider value={context}>
                        <Dashboard />
                    </RotationContext.Provider>
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})