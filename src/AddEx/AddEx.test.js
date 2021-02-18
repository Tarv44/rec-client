import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import AddEx from './AddEx'
import RotationContext from '../RotationContext'


describe('----- AddEx -----', () => {
    const context = {
        current_user: {
            id: 1,
            username: 'user'
        }
    }
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <RotationContext.Provider value={context}>
                <AddEx />
            </RotationContext.Provider> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <RotationContext.Provider value={context}>
                    <AddEx />
                </RotationContext.Provider>
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})