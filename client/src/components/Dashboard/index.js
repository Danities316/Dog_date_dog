import React from "react";
import Navbar from "../Navbar";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import DogsForm from "../DogsForm";
import DogsItem from "../DogsItem";
// import "../Register/signin.scss";
import "../DashboardCards/dashboardcards.scss";
import {getDogs, reset} from "../../features/dogs/dogSlice";
import Spinner from "../Spinner";
import DashboardHeader from "../Navbar/dashboardHeader";
import DashboardCard from "../../components/DashboardCards";
import SwipeButton from "../../components/SwipeButton";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <DashboardHeader />
      <section className="item-content">
        {/* <h1 className='welcome'>Welcome {user && user.username}</h1> */}
        <p className="subtitle">Dogs Dashboard</p>
      </section>

      {/* <DogsForm /> */}
      {/* Tinder Cards */}
      <DashboardCard />

      {/* SwipeButtons */}
      <SwipeButton />

      {/* <section className = "dog-content">
    {dog.length > 0 ? (
    <div className="dogs">
      {dog.map((dog) => (
        <DogsItem key={dog._id} dog = {dog} />
      ))}
    </div>
    ) 
    : 
    (
    <h3>You do not have registered dogs</h3>
    )}
   </section> */}
    </>
  );
}
