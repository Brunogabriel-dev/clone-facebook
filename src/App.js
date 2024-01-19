import React, {useContext} from "react";
import GlobalStyles from "./styles/global";
import { AuthContext } from "./contexts/auth";
import Login from "./components/login";

const App = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;
  
  return (
    <>
    gfdhgfhdgf
    <GlobalStyles />
    </>
  );
};

export default App