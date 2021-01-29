const STORE = {
    users: [
        {
            id: 1,
            username: 'user',
            email: 'jonahdevine@gmail.com',
            password: '1234'
        },
        {
            id: 2,
            username: 'rajDawg',
            email: 'sleepyLife@gmail.com',
            password: 'Bones4Days'
        },
        {
            id: 3,
            username: 'sunnyD',
            email: 'daniellekryce@gmail.com',
            password: 'violin4268'
        }
    ],
    exchanges: [
        {
            id: 1,
            date_created: new Date(),
            created_by: 1,
            title: 'The Roots',
            description: '',
        },
        {
            id: 2,
            date_created: new Date(),
            created_by: 1,
            title: 'Kiwi/Aussie Rock',
            description: "As if there wasn't enough to make us like New Zealand and Australia already, I find their music especially attractive. I want to go live there for a little bit and see what the scene is like."
        },
        {
            id: 3,
            date_created: new Date(),
            created_by: 1,
            title: 'Bark bark woof',
            description: ''
        },
        {
            id: 4,
            date_created: new Date(),
            created_by: 1,
            title: "My influences",
            description: ''
        },
        {
            id: 5,
            date_created: new Date(),
            created_by: 1,
            title: 'Wedding songs',
            description: ''
        }
    ],
    songs: [
        {
            id: 1,
            exchange_id: 1,
            title: 'Do you want more?!?!',
            artist: 'The Roots',
            album: 'Do you want more?!?!'
        },
        {
            id: 2,
            exchange_id: 1,
            title: 'Lazy Afternoon',
            artist: 'The Roots',
            album: 'Do you want more?!?!'
        },
        {
            id: 3,
            exchange_id: 1,
            title: 'Understand',
            artist: 'The Roots',
            album: ''
        },
        {
            id: 4,
            exchange_id: 2,
            title: 'Future Me Hates Me',
            artist: 'The Beths',
            album: 'Future Me Hates Me'
        },
        {
            id: 5,
            exchange_id: 2,
            title: 'Pedestrian At Best',
            artist: 'Courtney Barnett',
            album: ''
        },
        {
            id: 6,
            exchange_id: 2,
            title: 'Elevator Operator',
            artist: 'Courtney Barnett',
            album: ''
        },
        {
            id: 7,
            exchange_id: 3,
            title: 'Gin N Juice',
            artist: 'Snoop Dogg',
            album: 'Doggystyle'
        },
        {
            id: 8,
            exchange_id: 3,
            title: 'Dog Days Are Over',
            artist: 'Florence + The Machine',
            album: 'Lungs'
        },
        {
            id: 9,
            exchange_id: 3,
            title: "Where'd all the time go?",
            artist: 'Dr. Dog',
            album: 'Shame, Shame'
        },
        {
            id: 10,
            exchange_id: 4,
            title: 'Kick It To Me',
            artist: 'Sammy Rae',
            album: 'The Good Life'
        },
        {
            id: 11,
            exchange_id: 4,
            title: 'Sisyphus',
            artist: 'Andrew Bird',
            album: 'My Finest Work Yet'
        },
        {
            id: 12,
            exchange_id: 4,
            title: 'Distance',
            artist: 'Emily King',
            album: 'The Switch'
        },
        {
            id: 13,
            exchange_id: 5,
            title: "Sittin' On The Dock Of The Bay",
            artist: 'Otis Redding',
            album: ''
        },
        {
            id: 14,
            exchange_id: 5,
            title: 'I Will Survive',
            artist: 'Gloria Gaynor',
            album: ''
        },
        {
            id: 15,
            exchange_id: 5,
            title: 'L-O-V-E',
            artist: 'Nat King Cole',
            album: 'L-O-V-E'
        }
    ],
    comments: [
        {
            id: 1,
            song_id: 2,
            created_by: 1,
            message: 'I love this song'
        },
        {
            id: 2,
            song_id: 5,
            created_by: 1,
            message: 'I kinda like this song'
        },
        {
            id: 3,
            song_id: 6,
            created_by: 1,
            message: 'This song is pretty cool'
        },
        {
            id: 4,
            song_id: 3,
            created_by: 1,
            message: "I can't stop listening to this"
        },
        {
            id: 5,
            song_id: 10,
            created_by: 3,
            message: 'Do you know any other songs like this?'
        },
        {
            id: 6,
            song_id: 14,
            created_by: 3,
            message: "Let's learn this one for Friday"
        },
        {
            id: 7,
            song_id: 8,
            created_by: 2,
            message: 'Woof woof woof grrrrr woof'
        }
    ]
} 


export default STORE
