import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Box, Typography } from '@mui/material';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box className={css.wrapper}>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: 'bold' }}
        className={css.username}
      >
        Welcome, {user.name}
      </Typography>
      <button onClick={() => dispatch(logout())} className={css.logoutBtn}>
        Logout
      </button>
    </Box>
  );
}
