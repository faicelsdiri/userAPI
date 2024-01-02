import { Card } from "react-bootstrap";



import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


function Usercard({ user }) {

  const firstLetter = user.name.charAt(0).toUpperCase();
 console.log(user.id);
  return (
    <>
      <Card
          style={{
            textAlign: "center",
            justifyContent:"center",
            textDecoration:"none",
            marginTop: "50px",
            marginLeft: "20px",
            width: "350px",
            height: "600px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "4px",
            borderRadius: "30px", // Adjust the value as needed
          }}
        >
         
          <Card.Body >
          <span
                class="rounded-circle"
                style={{
                    justifyContent:"center",
                  margin: "20px",
                  marginLeft: "120px",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5em",
                }}
                className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
              >
                {firstLetter}
              </span>
            <Card.Title> {user.name}</Card.Title>
            <Card.Text> {user.username} </Card.Text>
            <Card.Text> {user.email} </Card.Text>
            <Card.Text> {user.address.street} </Card.Text>
            <Card.Text> {user.address.geo.lat}  {user.address.geo.lng    }  </Card.Text>
            <Card.Text> {user.phone} </Card.Text>
            <Card.Text> {user.website} </Card.Text>
            <Card.Text> {user.company.name} </Card.Text>

          </Card.Body>
          
        </Card>
    </>
  );
}
export default Usercard;
