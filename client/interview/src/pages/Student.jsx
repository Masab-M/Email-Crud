import React from 'react'

export default function Student() {
  return (
    <div>
        <div className="inputForm">
        <form action="">
        <div className="form-group">
            <input type="text" name="" id="" placeholder='Name' />
        </div>
        <div className="form-group">
            <input type="number" name="" id="" placeholder='Age' />
        </div>
        <div className="form-group">
            <select name="" id="">
                <option value="">Select Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
            </select>
        </div>
        <div className="form-submit">
            <button type="submit">Add</button>
        </div>
        </form>
        </div>
        <div className="filter">
            <div className="filterInput">
                <label htmlFor="filter">Filter By Age</label>
                <input type="number" name="filter" id="filter"  />
            </div>
        </div>
        <div className="students">
            <div className="singleStd">
                <h5 className="name">
                    Name
                </h5>
                
            </div>
        </div>
    </div>
  )
}
