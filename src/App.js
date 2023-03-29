import UserCard from "./Components/UserCard";
import { useSelector } from "react-redux";
import { useGetUserDetails } from "./Hooks/useUserTypes";
import EditUser from "./Components/EditUser";
import { CardcontainerStyled, LoaderWrapperStyled } from "./styled";
import Loader from './Components/Loader'

function App() {
  useGetUserDetails();
  const isLoading = useSelector((state) => state.reducer1.isLoading);
  return (
    <>
      {isLoading ? <LoaderWrapperStyled><Loader /></LoaderWrapperStyled> :
        <CardcontainerStyled>
          <UserCard />
          <EditUser />
        </CardcontainerStyled>
      }
    </>
  );
}

export default App;
