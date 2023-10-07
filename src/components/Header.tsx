import { Flex, Title } from "../component";

export default function Header() {
  return (
    <header>
      <Flex>
        <Flex $margin="0" $bgcolor="white" $width="60%">
          <Title>TO DO list</Title>
        </Flex>
      </Flex>
    </header>
  );
}
