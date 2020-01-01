import React from 'react';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebse/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
// import { createStructuredSelector} from 'reselect'

const Header = () => {
	const hidden = useSelector(selectCartHidden);
	const currentUser = useSelector(selectCurrentUser);

	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/shop'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => auth.signOut()}>
						SIGN OUT
        </OptionLink>
				) : (
						<OptionLink to='/signin'>SIGN IN</OptionLink>
					)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

export default Header;

// const mapStateToProps=createStructuredSelector({ // INSTEAD OF USING STATE AND ARROW FUNCTION WE CAN USE CSSELETOR FUNTCION WITH PASSED STATE FROM CONNECT

// 	//USE CREATE STRUCTURED SELECTOR
// 	currentUser: selectCurrentUser,
// 	hidden: selectCartHidden
// })
// export default connect(mapStateToProps, null)(Header);
