import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Song from './Song'
import store from '../dummy-store'
import RotationContext from '../RotationContext'


describe('----- Song -----', () => {
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
            <RotationContext.Provider value={context}>
                <Song users={store.users} song={store.songs[0]}/>
            </RotationContext.Provider>   
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <RotationContext.Provider value={context}>
                    <Song users={store.users} song={store.songs[0]}/>
                </RotationContext.Provider>    
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})