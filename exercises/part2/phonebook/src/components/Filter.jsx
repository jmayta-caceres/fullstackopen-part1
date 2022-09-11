import React from "react";

export default function Filter({ handleSearch, query }) {
  return (
    <div>
      filter shown with
      <input onChange={handleSearch} value={query} type="text" />
    </div>
  );
}
