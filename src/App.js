import React, { useContext } from "react";
import GlobalStyles from "./styles/global";
import { AuthContext } from "./contexts/auth";
import Login from "./components/login";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;
  
  console.log(user);
  return (
    <>
    <Header/>
    <Body/>
    <GlobalStyles />
    </>
  );
};

export default App;