import { CalendarIcon, EditIcon, SunIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em'>
        <ListItem>
            <NavLink to='/'>
            <ListIcon as={CalendarIcon} color="white"/>
            Dashboad
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/create'>
            <ListIcon as={EditIcon} color="white"/>
                Create
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/profile'>
            <ListIcon as={SunIcon} color="white"/>
                Profile
            </NavLink>
        </ListItem>
    </List>
  )
}
