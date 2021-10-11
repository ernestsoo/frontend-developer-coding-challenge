import React from "react";
import "../App.css";
import AuthorTag from "./AuthorTag";

function Attribution() {
  return (
    <div className="pb-16 pt-24">
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
      <AuthorTag
        author={"BECRIS"}
        link={"http://becrisdesign.com"}
        source={"www.freeicons.io"}
        sourceLink={"https://freeicons.io/"}
      />
      <AuthorTag
        author={"Fasil"}
        link={"https://freeicons.io/profile/722"}
        source={"www.freeicons.io"}
        sourceLink={"https://freeicons.io/"}
      />
      <AuthorTag
        author={"Fasil"}
        link={"https://freeicons.io/profile/722"}
        source={"www.freeicons.io"}
        sourceLink={"https://freeicons.io/"}
      />
      <AuthorTag
        author={"icon king1"}
        link={"https://freeicons.io/profile/3"}
        source={"www.freeicons.io"}
        sourceLink={"https://freeicons.io/"}
      />
    </div>
  );
}

export default Attribution;
