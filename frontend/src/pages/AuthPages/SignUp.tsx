// import PageMeta from "../../components/PageMeta";
import { useAuthPage } from '../../context/AuthContext';
import SignForm from './SignForm';

export default function SignUp() {
  const { setLogin, registration } = useAuthPage();

  setLogin(false)
  return (
    <>
      {/* <PageMeta
        title="React.js SignUp"
        description="This is React.js SignUp"
      /> */}

      <SignForm onSubmit={registration} />
    </>
  );
}
