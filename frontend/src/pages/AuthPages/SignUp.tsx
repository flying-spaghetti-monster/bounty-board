import { useAuthPage } from '../../context/AuthContext';
import SignForm from './SignForm';

export default function SignUp() {
  const { setLogin, registration } = useAuthPage();

  setLogin(false)
  return (
    <>
      <SignForm onSubmit={registration} />
    </>
  );
}
