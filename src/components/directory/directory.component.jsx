import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.jsx';
import './directory.styles.scss';

class Directory extends Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'VINYLS',
					img:
						'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
					id: 1,
					// size: 'large'
				},
				{
					title: `CD's`,
					img:
						'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
					id: 2,
					// size: 'large'
				},
				{
					title: `INSTR`,
					img:
						'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
					id: 3,
					// size: 'large'
                },
                {
					title: `INSTR`,
					img:
						'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/vinylmatter-main.jpg',
					id: 4,
					size: 'large'
				}
			]
		};
    }


	render() {
		return (
			
                <div className='directory-menu'>
					{this.state.sections.map(({ title, img, id, size }) =>
						<MenuItem key={id} title={title} imgURL={img} size={size} />
					)}
				</div>
			
		);
	}
}
export default Directory;


