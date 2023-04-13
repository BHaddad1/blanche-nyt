import { useState } from "react";
import "./Form.css";

export const Form = ({ handleSearchInput }) => {

  const [search, setSearch] = useState("");

  const handleClearButton = () => {
    setSearch("");
  }

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
      <button onClick={handleClearButton}>Clear</button>
    </form>
  )
}