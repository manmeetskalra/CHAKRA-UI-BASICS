import { LockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export default function Navbar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: 'Logged Out',
            description: 'Successfully Logged out',
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'bottom-left',
            icon: <LockIcon />
        })
    }

    return(
        <Flex as="Nav" p="10px" alignItems="center">
            <Heading as="H1">Card Tasks</Heading>
            <Spacer />
            <HStack spacing="20px">
            <Avatar name="Mario" src='/img/Mario' bg="purple.500" color='white'>
                <AvatarBadge boxSize='1.25em' bg='green.500'>
                    <Text fontSize='xs' color='white'>M</Text>
                </AvatarBadge>
            </Avatar>
            <Text>asdfaed@gmail.com</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
    )
}