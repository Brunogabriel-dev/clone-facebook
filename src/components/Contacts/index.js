import React from "react";
import ContactItem from "../ContactItem";
import * as C from "./styles";
import { FiSearch } from "react-icons/fi";
import { RiVideoAddFill, RivideoAddFill } from "react-icons/ri";
import { GokebabHorizontal } from "react-icons/go";

import bezos from "../../images/bezos.jpg";
import bezos from "../../images/bill.jpg";
import bezos from "../../images/mark.jpg";
import bezos from "../../images/elon.jpg";

const itens = [
  {src: bezos, name: "Jeff Bezoz"},
  {src: bill, name: "Bill Gates"},
  {src: mark, name: "Mark Zuckerberg"},
  {src: elon, name: "Elon Musk"},
];

const Contacts = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Label>Contatos</C.Label>
        <C.Container>
          <RiVideoAddFill />
          <FiSearch />
          <GokebabHorizontal />
        </C.Container>
      </C.Header>
      {itens.map((item, index ) => (
        <ContactItem key={index} src={item.src} name={item.name}/>
      ))}
    </C.Container>

  );
};

export default Contacts;
 
