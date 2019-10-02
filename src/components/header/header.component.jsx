import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logoshop.svg';
import { auth } from '../../firebse/firebase.utils';
import { connect } from 'react-redux'

const Header = ({currentUser}) => {
	return (
		<div className="header">
			<Link to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? 
                    <div 
                    className="option" 
                    onClick={ () => auth.signOut() 
                     }>SIGN OUT</div>
					: <Link 
                        to="/signIn" 
                        className="option">
							SIGNIN
						</Link>}
			</div>
		</div>
	);
};

const mapStateToProps=state=>({
	currentUser: state.user.currentUser
})

const mapdispatchToProps=state=>{
	return null
}

export default connect(mapStateToProps, mapdispatchToProps)(Header);
