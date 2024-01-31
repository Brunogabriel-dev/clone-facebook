import React, { useContext } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { AuthContext } from "../../contexts/auth";
import { db } from "../../firebase";
import Post from "../Post";

const Post = () => {
  const { user } = useContext(AuthContext);

  const [realtimePosts, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <>

    </>
  );
};

export default Post;