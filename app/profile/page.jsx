"use client"

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import { API_URLS } from "@constants";

const MyProfile = () => {
  const {data: session} = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(session?.user.id) {
      const fetchPosts = async () => {
        const url = API_URLS.GET_POSTS(session?.user.id);
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      };
      
      fetchPosts();
    }
  }, []);

  const handleEdit = async () => {

  }

  const handleDelete = async () => {

  }

  return (
    <Profile
      name={"My prompts"}
      desc={"All prompst created by me"}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile