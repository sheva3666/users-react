export const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1");
  return res.json();
};
