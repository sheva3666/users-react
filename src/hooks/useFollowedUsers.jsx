import { useState } from "react";

const useFollowedUsers = () => {
  const key = "usersToFollow";
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem(key)) || []
  );

  const setUserToFollow = (userToFollow) => {
    followedUsers.push(userToFollow);
    localStorage.setItem(key, JSON.stringify(followedUsers));
    setFollowedUsers((prevUsers) => [...prevUsers, userToFollow]);
  };

  const removeUserFromFollowed = (userId) => {
    const newFollowedUsers = followedUsers.filter((user) => userId !== user.id);
    localStorage.setItem(key, JSON.stringify(newFollowedUsers));
    setFollowedUsers(newFollowedUsers);
  };

  return { users: followedUsers, setUserToFollow, removeUserFromFollowed };
};

export default useFollowedUsers;
