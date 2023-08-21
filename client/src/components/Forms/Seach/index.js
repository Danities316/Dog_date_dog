import React from 'react'
<style type="text/css" media="screen">
@import "./App.scss";
</style>


function search() {
  return (
    <>
     <div className="form_container">
      <h2>Intimate Search</h2>
      <form action="#" method="get">
        <fieldset>
        <div className="search_row">
          <div className="search_column_1">
            <label>I am a</label>
          </div>
          <div className="search_column_2">
            <select className="gender">
              <option>Male</option>
            </select>
            <label>Seeking a</label>
            <select className="gender">
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="search_row">
          <div className="search_column_1">
            <label>Looking for a</label>
          </div>
          <div className="search_column_2">
            <select className="date">
              <option>Date</option>
            </select>
          </div>
        </div>
        <div className="search_row">
          <div className="search_column_1">
            <label>I was born</label>
          </div>
          <div className="search_column_2">
            <select className="dob">
              <option>Month</option>
            </select>
            <select className="dob">
              <option>Date</option>
            </select>
            <select className="dob">
              <option>Year</option>
            </select>
          </div>
        </div>
        <div className="search_row">
          <div className="search_column_1">
            <label>By Profile ID</label>
          </div>
          <div className="search_column_2">
            <input type="text" name="" value="" />
            <label className="check">With Photo</label>
            <input type="checkbox" name="" value="" className="checkbox"/>
          </div>
        </div>
        <div className="search_row last">
          <div className="search_column_1">&nbsp;</div>
          <div className="search_column_2">
            <input type="image" src="images/search.gif" className="search_btn"/>
          </div>
        </div>
        </fieldset>
      </form>
    </div>
    </>
  )
}

export defasearch