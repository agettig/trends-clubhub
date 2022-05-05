import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Club } from "../../types";
import styles from "../clubs/clubs.module.css";
import { Image } from "@chakra-ui/react";
import image from "./gymnastics.jpg";
import Link from "next/link";

type Props = {
  club: Club;
};

const ClubEntry = ({ club }: Props) => {
  return (
    <Link href="/clubinfo" passHref>
      <Box className={styles.element} borderWidth="1px" borderRadius="lg" p="4">
        <Box className="image-container">
          <Image src={image.src} alt="Image" className="image-style" />
        </Box>
        <Box margin="auto">
          <Heading size="md">{club.clubName}</Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default ClubEntry;
