import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Exchange from './Exchange'
import { BrowserRouter } from 'react-router-dom'
import RotationContext from '../RotationContext'


describe('----- Exchange -----', () => {
    const match = {
        params: {
            exId: 1
        }
    }

    const context = {
        current_user: {
            id: 1,
            username: 'user'
        }
    }
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <RotationContext.Provider value={context}>
                    <Exchange match={match}/>
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
                        <Exchange match={match}/>
                    </RotationContext.Provider>
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})