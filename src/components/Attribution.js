import React from "react";
import "../App.css";
import AuthorTag from "./AuthorTag";

function Attribution() {
  return (
    <div className="py-8">
      <AuthorTag
        author={"Vitaly Gorbachev"}
        link={"https://www.flaticon.com/authors/vitaly-gorbachev"}
      />
      <AuthorTag
        author={"Nadiinko"}
        link={"https://www.flaticon.com/authors/nadiinko"}
      />
      <AuthorTag author={"Freepik"} link={"https://www.freepik.com"} />
      <AuthorTag
        author={"Flat Icons"}
        link={"https://www.flaticon.com/authors/flat-icons"}
      />
    </div>
  );
}

export default Attribution;
