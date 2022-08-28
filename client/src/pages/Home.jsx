import { useState } from "react";
import Users from "../components/Users";
import AddUserModal from "../components/AddUserModal";

export default function Home() {
  const [searchField, setSearchField] = useState("");
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  console.log(searchField);

  return (
    <>
      <div className="container-fluid">
        <h1>Project Access</h1>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      
      <AddUserModal />
      <Users />
    </>
  );
}
