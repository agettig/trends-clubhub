import { Box, Divider, Heading } from "@chakra-ui/react"
import React from "react"
import { ClubWithId } from "../../types"
import styles from "../clubs/clubs.module.css"
import { Image } from '@chakra-ui/react'
import image from './gymnastics.jpg'
import Link from 'next/link'

type Props = {
  club: ClubWithId
}

const ClubEntry = ({ club }: Props) => {
  const clubUrl = new URL("http://localhost:3000/clubinfo")
  clubUrl.searchParams.append("club", club.name);

  return (
    <Link href={clubUrl} passHref>
      <Box className={styles.element} borderWidth="1px" borderRadius="lg" p="4">
        <Box className="image-container">
          <Image src={image.src} alt="Image" className="image-style" />
        </Box>
        <Box margin="auto">
          <Heading size="md">
            {club.name}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default ClubEntry;
