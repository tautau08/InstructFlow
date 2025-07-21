"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { use } from "react"; // ✅ Import React.use()

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  
  // ✅ Unwrap params using React.use()
  const resolvedParams = use(params);

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${resolvedParams?.id}/posts`); // ✅ Use resolvedParams
      const data = await response.json();

      setUserPosts(data);
    };

    if (resolvedParams?.id) fetchPosts(); // ✅ Use resolvedParams
  }, [resolvedParams.id]); // ✅ Use resolvedParams

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;