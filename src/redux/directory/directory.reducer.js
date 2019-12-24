const INITIAL_STATE = {
    sections: [
        {
            title: 'VINYLS',
            img:
                'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
            id: 1,
            linkUrl: 'vinyl'

            // size: 'large'
        },
        {
            title: `CD's`,
            img:
                'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
            id: 2,
            // size: 'large'
            linkUrl: 'cd'
        },
        {
            title: `INSTR`,
            img:
                'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
            id: 3,
            // size: 'large'
            linkUrl: 'instr'
        },
        {
            title: `INSTR`,
            img:
                'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
            id: 4,
            size: 'large'

        }
    ]
}

const directoryReducer=( state = INITIAL_STATE , action )=>{
    switch(action.type){
        default:
        return {
            ...state
        }
    }
}

export default directoryReducer