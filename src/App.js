import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signInSignUp/signInSignUp.component';
import { auth, createUserProfileDocument } from './firebse/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		//AFTER WE RUNNING APP AND COMPONENT IS MOUNTED -  CONNECTION W FIREBASE THROUGH AUTH IS PERMANENTLY OPEN - WE CAN GET AUTH.USER INFORMATION
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		//unsubscribe from auth listener for avoiding of memory leaks
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					{/* IF WE NEED TO USE SUBROUTES_ WE NEED TO DEL EXACT_ AFTER RENDERING ROUTER UNMOUNT MATCH */}
					<Route
						exact
						path="/signIn"
						render={() =>
							this.props.currentUser
								? <Redirect to="./" />
								: <SignInAndSignUp />}
					/>
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
