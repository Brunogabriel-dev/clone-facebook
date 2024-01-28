import React, { useContext, useRef,useState } from "react";
import * as C from "./styles";
import { MdVideoCall, MdCameraAlt} from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { db, storage } from "../../firebase";
import { AuthContext } from "../../contexts/auth";
import firebase from "firebase/compat/app";


const NewPost = () => {
  const { user } = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const fileRef = useRef(null);
  const [filePost, setFilePost] = useState("");




  return ( 
  <C.Container>
  </C.Container>
  );
};

export default NewPost;


