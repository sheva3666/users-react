export const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1");
  return res.json();
};

export const fetchSingleUser = async (userId) => {
  const res = await fetch(`https://reqres.in/api/users/${userId}`);
  return res.json();
};
