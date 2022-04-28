
import { Box, Heading } from "@chakra-ui/react"
import React from "react"
import { ClubComponent } from "../../types"
import styles from "../clubs/clubs.module.css"
import ClubCategory from "./ClubCategory"

type Props = {
  components: ClubComponent[]
}

const Gallery = ({ components }: Props) => {
  return (
    <>
      {components.map(component => {
        return (
          <ClubCategory key={component.category} component={component} />
        )
      })}
    </>
  )
}

export default Gallery