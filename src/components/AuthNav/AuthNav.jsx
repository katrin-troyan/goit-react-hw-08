import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <Stack direction="row" spacing={2}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </Stack>
  );
}
