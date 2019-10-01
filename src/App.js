import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signInSignUp/signInSignUp.component';
import { auth, createUserProfileDocument } from './firebse/firebase.utils';

const Vinyl = () =>
	<div>
		<h1>Hats Page</h1>
	</div>;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		//AFTER WE RUNNING APP AND COMPONENT IS MOUNTED -  CONNECTION W FIREBASE THROUGH AUTH IS PERMANENTLY OPEN - WE CAN GET AUTH.USER INFORMATION
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
          });
          
          console.log(this.state.currentUser)
				
				});

				// this.setState({currentUser: user})
				// console.log(user)
			}else{
        this.setState({currentUser: userAuth })
      }
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signIn" component={SignInAndSignUp} />
				</Switch>

				{/* <HomePage></HomePage> */}
			</div>
		);
	}
}

export default App;
