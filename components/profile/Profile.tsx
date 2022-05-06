import styles from "./profile.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../../util/firebase";
import { useEffect, useState } from "react";

//Will need to .map the events that they are interested in
const Profile = () => {
  // const eventsCollectionRef = query(collection(db, "events"));
  // const usersCollectionRef = query(collection(db, "users"));
  // const [events, setEvents] = useState<Event[] | null>(null);

  // useEffect(() => {
  //   const eventsQuery = query(usersCollectionRef, where("events", "!=", null));
  //   const unsubscribe = onSnapshot(eventsQuery, (querySnapshot) => {
  //     const eventArr = querySnapshot.docs.map(
  //       (event) => ({ ...event.data(), id: event.id } as Event)
  //     );
  //     setEvents(eventArr);
  //   });
  //   return unsubscribe;
  // }, []);
  // console.log(eventsQuery);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Saved Events</TableCaption>
        <Thead>
          <Tr>
            <Th>Host Club</Th>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th>Event Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Profile;
