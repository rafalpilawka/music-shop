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
		};
    }


	render() {
		return (
			
                <div className='directory-menu'>
					{this.state.sections.map(({ id, ...otherSectionProps }) =>
						<MenuItem key={id} {...otherSectionProps} />
					)}
				</div>
			
		);
	}
}
export default Directory;


