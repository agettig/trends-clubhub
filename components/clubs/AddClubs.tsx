import { Button, VStack, Input } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { FormEventHandler, useState } from "react";
import { Club } from "../../types";
import { db } from "../../util/firebase";

const AddClubs = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [president, setPresident] = useState("");
  const [website, setWebsite] = useState("");
  const clubsCollectionRef = collection(db, "clubs");

  const addTask: FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      description === "" ||
      category === "" ||
      email === "" ||
      president === "" ||
      website === ""
    )
      return;

    const club: Club = {
      name: name,
      description: description,
      category: category,
      email: email,
      president: president,
      website: website,
      image: "",
    };

    addDoc(clubsCollectionRef, club);

    setName("");
    setDescription("");
    setCategory("");
    setEmail("");
    setPresident("");
    setWebsite("");
  };

  return (
    <form onSubmit={addTask}>
      <VStack shouldWrapChildren>
        <Input
          value={name}
          type="text"
          placeholder="Club name..."
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={description}
          type="text"
          placeholder="Club description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          value={category}
          type="text"
          placeholder="Club category..."
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          value={email}
          type="text"
          placeholder="Club email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={president}
          type="text"
          placeholder="Club president..."
          onChange={(e) => setPresident(e.target.value)}
        />
        <Input
          value={website}
          type="text"
          placeholder="Club website..."
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Button
          type="submit"
          isDisabled={
            name === "" ||
            description === "" ||
            category === "" ||
            email === "" ||
            president === "" ||
            website === ""
          }
        >
          Add Club
        </Button>
      </VStack>
    </form>
  );
};

export default AddClubs;
