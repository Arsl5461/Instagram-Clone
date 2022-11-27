import React from 'react'
import Image from "../assets/arslan.jpg"
import PostImage from "../assets/post2.jpeg"
import PostImage1 from "../assets/post1.jpeg"
import PostImage3 from "../assets/post3.jpeg"
import PostImage4 from "../assets/post4.jpg"
import Heart from "../assets/heart.svg"
import Comment from "../assets/chat.svg"
import {useState} from "react"
import {useParams,useNavigate} from "react-router-dom"
function Posts() {
    const params=useParams();
    console.log(params);
    const navigate=useNavigate();
    const postDetails=(id)=>{
let path=`/${id}`
navigate(path);
    }
    const data = [
        {
            "UserId":1,
            "ProfileImage": Image,
            "UserName": "Arslan Akmal",
            "Description":"MERN STACK DEVELOPER",
            "PostPicture":PostImage1,
            "PostDesc":"This is testing post 1",

        },
        {
            "UserId":2,
            "ProfileImage": Image,
            "UserName": "Haris Ishtiaq",
            "Description":"Full STACK DEVELOPER",
            "PostPicture":PostImage3,
            "PostDesc":"This is testing post 2",
            
        },
        {
            "UserId":3,
            "ProfileImage":Image,
            "UserName": "Adeel",
            "Description":"MEAN STACK DEVELOPER",
            "PostPicture":PostImage,
            "PostDesc":"This is testing post 3",
            
        },
        {
            "UserId":4,
            "ProfileImage": Image,
            "UserName": "Waqas",
            "Description":"SOCIAL MEDIA EXPERT",
            "PostPicture":PostImage4,
            "PostDesc":"This is testing post 4",
            
        },
        {
            "UserId":5,
            "ProfileImage": Image,
            "UserName": "Fahad Raza",
            "Description":"PHP STACK DEVELOPER",
            "PostPicture":PostImage,
            "PostDesc":"This is testing post 5",
            
        },
    ]

    const [comments]=useState(559)
  return (
    <>
    {
        data.map((user)=>{
            return(
                <>
<div className="d-flex">
            <img src={user.ProfileImage} className="profile-image" alt="Profile"/>
            <div className="d-flex flex-column">
            <div className='margin-left' onClick={()=>postDetails(user.UserId)}><b>{user.UserName}</b></div>
            <p className='margin-left'>{user.Description}</p>
            </div>
            </div>
            <img src={user.PostPicture} className="postImage" alt="Post"></img>
        <img src={Heart} className=" like" alt="Heart"/>
        <img src={Comment} className="margin-left like" alt="Comment"/>
        <div className='mt-2'><b>{user.UserName}</b><span className='left'>{user.PostDesc}</span></div>
        <p className='text-secondary'> View All {comments} Comments</p>
        </>
            )          
        })
 
    }
    </>
  )
}

export default Posts