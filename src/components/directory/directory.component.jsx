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


// import React from 'react';

// import MenuItem from '../menu-item/menu-item.jsx';

// import './directory.styles.scss';

// class Directory extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             sections: [
//                 {
//                     title: 'hats',
//                     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                     id: 1
//                 },
//                 {
//                     title: 'jackets',
//                     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                     id: 2
//                 },
//                 {
//                     title: 'sneakers',
//                     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                     id: 3
//                 },
//                 {
//                     title: 'womens',
//                     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                     size: 'large',
//                     id: 4
//                 },
//                 {
//                     title: 'mens',
//                     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                     size: 'large',
//                     id: 5
//                 }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div className='directory-menu'>
//                 {this.state.sections.map(({ title, imageUrl, id, size }) => (
//                     <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />
//                 ))}
//             </div>
//         );
//     }
// }

// export default Directory;
