import React from 'react'

export default function Header() {
  return (
    <div className = 'container'>
        <span>Project Access</span>
        <span>
          <form className="d-flex" role="search">
            {/* <input type="search" value="search" class="form-control me-2"  placeholder="Search" aria-label="Search"> */}
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </span>
    </div>
  )
}
