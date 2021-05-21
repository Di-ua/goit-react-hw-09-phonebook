import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { CssBaseline, Typography, Container } from '@material-ui/core';

export default function HomeView() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const name = useSelector(authSelectors.getUserName);
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      {!isAuthenticated ? (
        <>
        <img src='https://closer.bot/wp-content/uploads/2018/11/920x312-Contacts.jpg' width="540px"/>
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            style={{ marginTop: '60px' }}
          >
            Welcome to your Personal Phonebook!
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            My name is Diana Kuzmina and this is my first application!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="error"
            paragraph
          >
Let's start &#128640;          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            But first register!{' '}
            <NavLink exact to="/register" >
            here
          </NavLink>
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            If you are already registered, just{' '}
          <NavLink exact to="/login" >
            Log in
          </NavLink>{' '}
          and check your{' '}
          <NavLink exact to="/contacts" >
            Contacts
          </NavLink>
          </Typography>
          
        </>
      ) : (
        <>
          <Typography
            variant="h2"
            align="center"
            color="textSecondary"
            paragraph
            style={{
              marginTop: '60px',
            }}
          >
            Welcome, {name}!
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary">
            I will help you!
          </Typography>
        </>
      )}
    </Container>
  );
}
