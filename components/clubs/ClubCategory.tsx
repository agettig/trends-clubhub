
import { Box, Divider, Heading } from "@chakra-ui/react"
import React from "react"
import styles from "../clubs/clubs.module.css"
import { ClubComponent } from "../../types"
import ClubEntry from "./ClubEntry"


type Props = {
  component: ClubComponent
}

const ClubCategory = ({ component: { category, clubs } }: Props) => {
  return (

    < Box padding={10} >
      <h2>{category}</h2>

      {clubs.map(
        (club) => {
          return <ClubEntry key={club.clubId} club={club} />
        }
      )}

    </Box >


  )
}

export default ClubCategory