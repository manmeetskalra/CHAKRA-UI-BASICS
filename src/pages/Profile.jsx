import { TabList, TabPanels, Tabs, Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { EmailIcon, ChatIcon, StarIcon } from "@chakra-ui/icons";
export default function Profile() {
  return (
    <Tabs mt='40px' p='20px' colorScheme='purple' variant='enclosed'>
      <TabList>
        <Tab _selected={{color:'white', bg:'purple.400'}}>Account Info</Tab>
        <Tab _selected={{color:'white', bg:'purple.400'}}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email: email@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Anything which is dummy text
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Anything which is dummy text
            </ListItem>
          </List>
        </TabPanel>

      </TabPanels>
    </Tabs>
  )
}
