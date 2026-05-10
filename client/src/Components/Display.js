import { Container } from "reactstrap";
import { Form,FormGroup,Label,Input,Button } from "reactstrap";
import {Row,Col} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {useState } from "react";
import { deleteUser } from "../Features/UserSlice";
import { Link } from "react-router-dom";
const Display = () => {

    const userList = useSelector((state) => state.users.value);
    const dispatch= useDispatch();
    const handleDelete=(email)=>
    {
      dispatch(deleteUser(email));
    }
     return (
    <Container>
      <Row >
        <Col  md ={6}>
    List of Users
              <table border="1">
                <tbody>
                  {userList.map((user) => (
                    <tr key={user.email}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        <Button onClick={()=>handleDelete(user.email)}>Delete</Button>
                      </td>
                      <td>
                        <Link to={`/update/${user.email}/${user.name}/${user.password}`}>
                        <Button >Update User</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>    
        </Col>
        </Row>
        </Container>
        )
}
export default Display;