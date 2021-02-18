import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import NewSong from './NewSong'
import { BrowserRouter } from 'react-router-dom'


describe('----- NewSong -----', () => {
    const form_state = {
        title: '',
        url_link: '',
        artist: '',
        album: ''
    }

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render((
            <BrowserRouter>
                <NewSong index={1} form_state={form_state}/>
            </BrowserRouter> 
        ), div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <NewSong index={1} form_state={form_state}/>
                </BrowserRouter> 
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})