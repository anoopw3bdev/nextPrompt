"use client";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import { API_URLS } from "@constants";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (session?.user.id) {
      const fetchPosts = async () => {
        const url = API_URLS.GET_POSTS(session?.user.id);
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      };

      fetchPosts();
    } else {
      router.push("/");
    }
  }, []);

  const handleEdit = async (post) => {
    router.push(`update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete the promot?");

    if (hasConfirmed) {
      try {
        await fetch(API_URLS.GET_PROMPT(post._id), {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.debug(error);
      }
    }
  };

  return (
    <Profile
      name={"My prompts"}
      desc={"All prompst created by me"}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
