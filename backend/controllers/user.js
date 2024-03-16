// import { v4 as uid } from "uuid";
let users = [];
let uid=1
export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user,id: String(uid)});
  uid++
  res.send("user added!");
};
export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};
export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("user deleted!");
};
export const updateUser=(req,res)=>{
  const user=users.find((user)=>user.id===req.params.id)
  Object.assign(user, req.body); 
  res.send(user)
}
