import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import AddComment from './AddComment'


describe('----- AddComment -----', () => {
    const handleComment = () => {console.log('comment submitted')}
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(<AddComment/>, div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<AddComment
                handleComment={handleComment}
                songIdx={1}
                inputValue={'comment'}        
            />)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})
