import { useAuthPage } from '../../context/AuthContext';
import SignForm from './SignForm';

export default function SignIn() {
  const { setLogin, login } = useAuthPage();
  setLogin(true)
  return (
    <>
      <SignForm onSubmit={login} />
    </>
  );
}
