import { ClubWithId } from "../../types";
import { Divider, Heading, Image, Box } from "@chakra-ui/react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { db } from "../../util/firebase";
import { useEffect, useState } from "react";
import Events from "./Events";

const clubsCollectionRef = query(collection(db, "clubs"));

const ClubInfo = () => {

  let url;
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  }

  let clubName;
  console.log(url)
  url ? clubName = url.searchParams.get("club") : clubName = "";
  console.log(clubName)


  const clubQuery = query(clubsCollectionRef, where("name", "==", clubName));

  const [club, setClub] = useState<ClubWithId[] | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unsubscribe = onSnapshot(clubQuery, (querySnapshot) => {
        const clubArr = querySnapshot.docs.map(
          (club) => ({ ...club.data(), id: club.id } as ClubWithId)
        );
        setClub(clubArr);
      });
      return unsubscribe;
    }
  }, []);

  const clubData = club ? club[0] : null;

  return (
    <>

      {clubData && clubName ? (
        <Box width="80%" margin="auto">
          <Heading>{clubData.name}</Heading>
          <p>Email: {clubData.email}</p>
          {clubData.image ?? <Image src={clubData.image} alt="Image" />}
          <p>Description: {clubData.description}</p>
          <Divider />

          <Events clubName={clubName} />
        </Box>
      ) : (
        <Box></Box>
      )}
    </>
  );
};

export default ClubInfo;
