import image from "../Images/user.png";
import { useSelector } from "react-redux";
import Location from "./Location";
const User = () => {
const user = useSelector((state) => state.users.user);

  const email = user.email;
  const name = user.name;

  const picURL = user.profilePic
    ? user.profilePic.startsWith("blob:")
      ? user.profilePic
      : "http://localhost:3001/uploads/" + user.profilePic
    : image;


  return (
    <div>
      <h1>User</h1>
      <img src={picURL} className="userImage"></img>
      <p>{name}</p>
      <p>{email}</p>
      <Location/>
    </div>
  );
};

export default User;
