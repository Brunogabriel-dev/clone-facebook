import React, { useContext } from "react";
import StoryCard from "../StoryCard";
import * as C from "./styles";

import bruno from "../../images/bruno.jpg";
import bezos from "../../images/bezos.jpg";
import bill from "../../images/bill.jpg";
import mark from "../../images/mark.jpg";
import elon from "../../images/elon.jpg";
import { AuthContext } from "../../contexts/auth";

const Stories = () => {
  const { user } = useContext(AuthContext);

  const itens = [
    {src: bruno, profile: bruno, name: user.name },
    {src: bezos, profile: bezos, name: "Jeff Bezoz"},
    {src: bill, profile: bill, name: "Bill Gates"},
    {src: mark, profile: mark, name: "Mark Zuckerberg"},
    {src: elon, profile: elon, name: "Elon Musk"},
  ];

  return (
    <C.Container>
      {itens.map((item, index) => (
        <StoryCard
        key={index}
        src={item.src}
        name={item.name}
        profile={item.profile}
        />
      ))}
    </C.Container>
  );
};

export default Stories;


