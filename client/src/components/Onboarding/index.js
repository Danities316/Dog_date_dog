import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { updateUser, reset } from "../../features/auth/authSlice";
import "./onboarding.scss";
import Spinner from "../Spinner";


export default function Onboarding() {
    const [formData, setFormData] = useState({
        firstName: '',
        LastName: '',
        DateOfBirth: '',
        Address: '',
        State: '',
        LGA: '',
        Description: '',
        PhoneNumber: '',
        Gender: '',
      });
    
      const {
        firstName,
        LastName,
        DateOfBirth,
        Address,
        State,
        LGA,
        Description,
        PhoneNumber,
        Gender,
      } = formData;
    
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
    
    
      useEffect(() => {
        if(isError){
          toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            icon: false,
            className: 'toast-message'
        })
        }else if(isSuccess || user){
          navigate('/onboarding')
        }else{
          dispatch(reset())
        }
    
       
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        })
        )
      }
    
      const submit = (e) => {
        e.preventDefault()
          const userData = {
            firstName,
            LastName,
            DateOfBirth,
            Address,
            State,
            LGA,
            Description,
            PhoneNumber,
            Gender,
          }
          dispatch(updateUser(userData))
      }
      if(isLoading){
        return <Spinner />
      }
      
  return (
    <>
    <div className="bold-line"></div>
    <div className="container">
      <div className="window">
        <div className="overlay"></div>
        <div className="content">
          <div className="welcome">Update Your Account</div>
          {/* <div className="subtitle">
            We're almost done. Before using our services you need to create an
            account.
          </div> */}
          <form action="POST">
            <div className="input-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-line full-width"
                onChange={onChange}
              ></input>
             <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                className="input-line full-width"
                onChange={onChange}
              ></input>
               <input
                type="text"
                name="DateOfBirth"
                placeholder="  Date Of Birth"
                className="input-line full-width"
                onChange={onChange}
              ></input>
               <input
                type="text"
                name="Address"
                placeholder="Address"
                className="input-line full-width"
                onChange={onChange}
              ></input>
                <input
                type="text"
                name="State"
                placeholder="State"
                className="input-line full-width"
                onChange={onChange}
              ></input>
                <input
                type="text"
                name="LGA"
                placeholder="LGA"
                className="input-line full-width"
                onChange={onChange}
              ></input>
                <input
                type="text"
                name="PhoneNumber"
                placeholder="Phone Number"
                className="input-line full-width"
                onChange={onChange}
              ></input>
                <input
                type="text"
                name="Description"
                placeholder="Descrition"
                className="input-line full-width"
                onChange={onChange}
              ></input>
               <input
                type="text"
                name="SEX"
                placeholder="Gender"
                className="input-line full-width"
                onChange={onChange}
              ></input>
              <div>
              <button className="ghost-round full-width" onClick={submit}>
                Update Account
              </button>
              
            </div>
           
            </div>
            
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}
