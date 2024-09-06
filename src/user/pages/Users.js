import React from "react"
import UserList from "../components/UsersList"

const Users = () => {
    const USERS = [{
        "id": 1,
        "image": "http://dummyimage.com/201x100.png/ff4444/ffffff",
        "name": "Orren Spaducci",
        "places": 1
      }, {
        "id": 2,
        "image": "http://dummyimage.com/113x100.png/dddddd/000000",
        "name": "Jone Jeanneau",
        "places": 2
      }, {
        "id": 3,
        "image": "http://dummyimage.com/169x100.png/ff4444/ffffff",
        "name": "Brigid Sarjent",
        "places": 3
      }, {
        "id": 4,
        "image": "http://dummyimage.com/194x100.png/cc0000/ffffff",
        "name": "Kynthia Hanwright",
        "places": 4
      }, {
        "id": 5,
        "image": "http://dummyimage.com/202x100.png/ff4444/ffffff",
        "name": "Bale Coule",
        "places": 5
      }, {
        "id": 6,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
        "name": "Cliff Schubbert",
        "places": 6
      }, {
        "id": 7,
        "image": "http://dummyimage.com/180x100.png/cc0000/ffffff",
        "name": "Donny Crux",
        "places": 7
      }, {
        "id": 8,
        "image": "http://dummyimage.com/222x100.png/ff4444/ffffff",
        "name": "Gaylor Bedells",
        "places": 8
      }, {
        "id": 9,
        "image": "http://dummyimage.com/138x100.png/ff4444/ffffff",
        "name": "Nadiya Prydden",
        "places": 9
      }, {
        "id": 10,
        "image": "http://dummyimage.com/202x100.png/cc0000/ffffff",
        "name": "Charline Vassbender",
        "places": 10
      }]
    return <UserList items={USERS} />
}
export default Users