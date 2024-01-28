import React from "react";
import Stories from "../Stories";
import NewPost from "../NewPost";
import * as C from "./styles";

const Feed = () => {
  return (
  <C.Container>
     <Stories />
    <NewPost />
    {/*<Post /> */}
  </C.Container>
  );
};

export default Feed;
