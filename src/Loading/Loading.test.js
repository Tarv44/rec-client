import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Loading from './Loading'


describe('----- Loading -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(<Loading />, div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<Loading />)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})