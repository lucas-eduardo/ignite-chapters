import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Eduardo</Text>
          <Text color="gray.300" fontSize="small">
            lucas.eduardo.developer@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Lucas Eduardo" src="https://github.com/lucas-eduardo.png" />
    </Flex>
  )
}