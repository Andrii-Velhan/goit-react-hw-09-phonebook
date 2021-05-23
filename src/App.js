import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('useEffect заменяющий componentDidMount');
		dispatch(authOperations.getCurrentUser())
	}, [dispatch]);

	return (
      <Container>
        <AppBar />

        <Suspense fallback={<Spinner />}>
          <Switch>
							<PublicRoute exact path="/" restricted component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhoneBookPage}
            />
          </Switch>
        </Suspense>
      </Container>
    );

}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurretnUser();
//   }

//   render() {
//     return (
//       <Container>
//         <AppBar />

//         <Suspense fallback={<Spinner />}>
//           <Switch>
//             <PublicRoute exact path="/" restricted component={HomePage} />
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo="/contacts"
//               component={RegisterPage}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo="/contacts"
//               component={LoginPage}
//             />
//             <PrivateRoute
//               path="/contacts"
//               redirectTo="/login"
//               component={PhoneBookPage}
//             />
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurretnUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
