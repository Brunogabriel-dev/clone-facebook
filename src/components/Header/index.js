import React, { useContext } from "react";
import * as C from "./styles";
import { SiFacebook, SiNintendogamecube, SiMessenger } from "react-icons/si";
import { FiSearch, FiMenu } from "react-icons/fi";
import {
  MdOndemandVideo,
  MdHome,
  MdGroups,
  MdNotifications,
} from "react-icons/md";
import { FaStore, FaCarretDown } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import HeaderIcon from "../HeaderIcon";
import { AuthContext } from "../../contexts/auth";

const Header = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <C.Container>
      <C.Context>
        <C.Section className="section1">
          <SiFacebook color="#046ee5" />
          <C.DivSearch>
            <FiSearch/>
            <C.Input placeholder="Pesquisar no Facebook" />
          </C.DivSearch>
        </C.Section>
        <C.Section className="section2"></C.Section>
        <C.Section className="section3"></C.Section>
      </C.Context>
    </C.Container>  
  );
};

export default Header;
