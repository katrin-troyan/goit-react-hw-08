import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Stack } from '@mui/material';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
          >
            Contacts
          </NavLink>
        )}
      </Stack>
    </nav>
  );
}
