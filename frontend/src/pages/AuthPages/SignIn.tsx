// import PageMeta from "../../components/PageMeta";
import { useAuthPage } from '../../context/AuthContext';
// import AuthLayout from "../../layouts/AuthLayout";
import SignForm from './SignForm';

export default function SignIn() {
  const { setLogin, login } = useAuthPage();
  setLogin(true)
  return (
    <>
      {/* <PageMeta
        title="React.js SignIn"
        description="This is React.js SignIn"
      /> */}
      <SignForm onSubmit={login} />
    </>
  );
}
