import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';

import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute/PrivaeRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

const HomeView = lazy(() => import('./pages/HomeView'));
const RegisterView = lazy(() => import('./pages/RegisterView'));
const LoginView = lazy(() => import('./pages/LoginView'));
const PhonebookView = lazy(() => import('./pages/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <MenuBar />
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/login"
              restricted
              redirectTo={'/'}
              component={LoginView}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo={'/'}
              component={RegisterView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo={'/login'}
              component={PhonebookView}
            />
          </Switch>
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}
