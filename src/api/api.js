export const fetchUsers = async (currentPage) => {
  const res = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
  return res.json();
};

export const fetchSingleUser = async (userId) => {
  const res = await fetch(`https://reqres.in/api/users/${userId}`);
  return res.json();
};

export const createUser = async (newUser) => {
  const res = await fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return res.json();
};
