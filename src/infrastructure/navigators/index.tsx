import { useAppSelector } from '../../app/hook.store';
import Typography from '../../components/typography';
import AppNavigator from './app.navigator';
import AuthNavigator from './auth.navigator';
import useLoggedIn from '../../hooks/useLoggedIn.hook';

function Navigator() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [loading] = useLoggedIn();

  if (loading) return <Typography>loading</Typography>;

  if (isAuthenticated) return <AppNavigator />;
  return <AuthNavigator />;
}

export default Navigator;
