
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
import { useSelector } from "react-redux";
import User from "./User";
import { useState } from "react";
import { updateUserProfile } from "../Features/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const Profile = () => {
const user = useSelector((state) => state.users.user);
const [userName, setUserName] = useState(user.name);
const [pwd, setPwd] = useState(user.password);
const [confirmPassword, setConfirmPassword] = useState(user.password);
const [profilePic, setProfilePic] = useState(user.profilePic);
const dispatch= useDispatch();
const navigate = useNavigate();
const handleUpdate = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        const handleFileChange = (event) => {
          // Use e.target.files[0] to get the file itself
          const uploadFile = event.target.files[0];
          if (!uploadFile) alert("No file uploaded");
          else setProfilePic(event.target.files[0]);
        };

    
        // Prepare the user data object with the current user's email and updated details
        const userData = {
          email: user.email, // Retrieve email from the Redux store
          name: userName, // Get the updated name from the state variable
          password: pwd, // Get the updated password from the state variable
          profilePic: profilePic,
        };
        console.log(userData);
        // Dispatch the updateUserProfile action to update the user profile in the Redux store
        dispatch(updateUserProfile(userData));
        alert("Profile Updated.");
        // Navigate back to the profile page after the update is completed
        navigate("/profile");
      };


  return (
    <Container>
      <Row>
        <Col md={2}><User/></Col>
        <Col md={4}>Update Profile
        <Form onSubmit={handleUpdate}>
            <input type="file" name="profilePic" />
            <div className="appTitle"></div>
          
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" placeholder="Name..." type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
             />
            </FormGroup>
            
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password..."
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword "
                name="confirmPassword"
                placeholder="Confirm Password..."
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" className="button">
                Update Profile
              </Button>
            </FormGroup>
          </Form>

        
        </Col>
      </Row>
      
    </Container>
  );
};

export default Profile;
