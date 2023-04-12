import { useState } from "react";

export const Form = ({ handleSearchInput }) => {

  const [search, setSearch] = useState("");

  return (
    <form className="form">
      <label>
        <input 
          type="text"
          name="search"
          placeholder="Search for article here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            handleSearchInput(search)
          }}
        />
      </label>
    </form>
  )
}