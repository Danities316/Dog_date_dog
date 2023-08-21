import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
// import { getUsers } from "../../features/auth/authSlice";
import {getDogs, reset} from "../../features/dogs/dogSlice";
import "./dashboardcards.scss";
import Spinner from "../Spinner";

function DashboardCard() {
  //  const [ dogs, setDogs ] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);
  const {dog, isLoading, isError, message} = useSelector((state) => state.dog);
  useEffect(() => {
    if (isError) {
      console.log(message);
    } else if (!user) {
      navigate("/");
    } else {
      // console.log(users.username)
      dispatch(getDogs());
      // dispatch(getUsers())
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  const swiped = (direction, nameToDelete) => {
    console.log(`Removing: ${nameToDelete}`);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <>
      <h1 className="welcome">Welcome {user && user.username}</h1>
      <section>
        <div className="dashbaordcard">
          <div className="tinderCardContainer">
            {/* Looping through the users */}
            {dog.map((user) => (
              <TinderCard
                className="swipe"
                key={user._id}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, user.petname)}
                onCardLeftScreen={() => outOfFrame(user.petname)}
              >
                <div
                  style={{
                    backgroundImage: `url( ${user.photo})`,
                    backgroundRepeat: "no-repeat",
                  }}
                  className="card"
                >
                  <h3>{user.petname}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardCard;
