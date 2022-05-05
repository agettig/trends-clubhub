import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "../clubs/clubs.module.css";
import { ClubComponent } from "../../types";
import ClubEntry from "./ClubEntry";

type Props = {
  component: ClubComponent;
};

const ClubCategory = ({ component: { category, clubs } }: Props) => {
  return (
    <Box padding={10} marginTop={10} borderWidth="1px" borderRadius="sm" p="4">
      <Heading size="lg" marginBottom={4}>
        {category}
      </Heading>
      <Flex
        flexWrap="wrap"
        direction="row"
        align="stretch"
        justify="space-around"
      >
        {clubs.map((club) => {
          return <ClubEntry key={club.clubId} club={club} />;
        })}
      </Flex>
    </Box>
  );
};

export default ClubCategory;
