import { Box, Divider, Heading } from "@chakra-ui/react"
import React from "react"
import { Club } from "../../types"
import styles from "../clubs/clubs.module.css"
import { Image } from '@chakra-ui/react'
import image from './gymnastics.jpg'

type Props = {
  club: Club
}

const ClubEntry = ({ club }: Props) => {
  return (
    <Box className={styles.element}>
      <Box className="image-container">
        <Image src={image.src} alt="Image" className="image-style" />
      </Box>
      <Box margin="auto" padding={20}><h3>{club.clubName}</h3></Box>

    </Box>
  )
}

export default ClubEntry