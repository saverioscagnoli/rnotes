import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from "@chakra-ui/react";

interface ThemeProps {
  children: any;
}

const editorTheme = {
  h1: (props: ThemeProps) => {
    const { children } = props;
    return (
      <Heading as="h1" fontSize="2xl" fontWeight="bold" mt={1} mb={2}>
        {children}
      </Heading>
    );
  },
  h2: (props: ThemeProps) => {
    const { children } = props;
    return (
      <Heading as="h2" fontSize="xl" fontWeight="bold" mt={3} mb={2}>
        {children}
      </Heading>
    );
  },
  h3: (props: ThemeProps) => {
    const { children } = props;
    return (
      <Heading as="h3" fontSize="lg" fontWeight="bold" mt={3} mb={2}>
        {children}
      </Heading>
    );
  },
  h4: (props: ThemeProps) => {
    const { children } = props;
    return (
      <Heading as="h4" fontSize="md" fontWeight="bold" mt={2} mb={1}>
        {children}
      </Heading>
    );
  },
  h5: (props: ThemeProps) => {
    const { children } = props;
    return (
      <Heading as="h5" fontSize="sm" fontWeight="bold" mt={2} mb={1}>
        {children}
      </Heading>
    );
  },
  h6: (props: ThemeProps) => {
    const { children } = props;
    return (
      <Heading as="h6" fontSize="xs" fontWeight="bold" mt={2} mb={1}>
        {children}
      </Heading>
    );
  },
  input: (props: ThemeProps) => {
    const { children } = props;
    return <Text fontWeight="bold">{children}</Text>;
  },
  p: (props: ThemeProps) => {
    const { children } = props;
    return <Text fontSize="md">{children}</Text>;
  },
  li: (props: ThemeProps) => {
    const { children } = props;
    return (
      <ListItem mt={1} ml={1} mb={1}>
        {children}
      </ListItem>
    );
  },
  ol: (props: ThemeProps) => {
    const { children } = props;
    return (
      <OrderedList mt={2} mb={2}>
        {children}
      </OrderedList>
    );
  },
  ul: (props: ThemeProps) => {
    const { children } = props;
    return (
      <UnorderedList mt={2} mb={2}>
        {children}
      </UnorderedList>
    );
  }
};

export default editorTheme;
