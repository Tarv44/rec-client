import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Footer from './Footer'


describe('----- Footer -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(<Footer />, div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<Footer />)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})