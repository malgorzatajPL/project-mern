import React from "react"
import UserList from "../components/UsersList"

const Users = () => {
    const USERS = [{
        "id": 1,
        "image": "https://gravatar.com/avatar/5660377032e7c1ef3869b9562892030f?s=400&d=robohash&r=x",
        "name": "Orren Spaducci",
        "places": 1
      }, {
        "id": 2,
        "image": "https://robohash.org/5660377032e7c1ef3869b9562892030f?set=set4&bgset=&size=400x400",
        "name": "Jone Jeanneau",
        "places": 3
      }, {
        "id": 3,
        "image": "https://gravatar.com/avatar/072bdd84a34f446ba33f5e1fdc039442?s=400&d=robohash&r=x",
        "name": "Brigid Sarjent",
        "places": 3
      }, {
        "id": 4,
        "image": "https://robohash.org/072bdd84a34f446ba33f5e1fdc039442?set=set4&bgset=&size=400x400",
        "name": "Kynthia Hanwright",
        "places": 7
      }, {
        "id": 5,
        "image": "https://gravatar.com/avatar/997a92d9c64327cf37e132692698d4e5?s=400&d=robohash&r=x",
        "name": "Bale Coule",
        "places": 1
      }, {
        "id": 6,
        "image": "https://robohash.org/997a92d9c64327cf37e132692698d4e5?set=set4&bgset=&size=400x400",
        "name": "Cliff Schubbert",
        "places": 2
      }, {
        "id": 7,
        "image": "https://gravatar.com/avatar/997a92d9c64327cf37e132692698d4e5?s=400&d=robohash&r=x",
        "name": "Donny Crux",
        "places": 7
      }, {
        "id": 8,
        "image": "https://robohash.org/ccd85d2d5eb8d82cbcba43c137b794a4?set=set4&bgset=&size=400x400",
        "name": "Gaylor Bedells",
        "places": 2
      }, {
        "id": 9,
        "image": "https://gravatar.com/avatar/ccd85d2d5eb8d82cbcba43c137b794a4?s=400&d=robohash&r=x",
        "name": "Nadiya Prydden",
        "places": 4
      }, {
        "id": 10,
        "image": "https://robohash.org/ae36bd38d7d80c77d4a72808bdb06b82?set=set4&bgset=&size=400x400",
        "name": "Charline Vassbender",
        "places": 1
      }]
    return <UserList items={USERS} />
}
export default Users