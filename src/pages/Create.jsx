import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW='480px'>
      <Form method="post" action="/create">
        <FormControl isRequired mb='40px'>
          <FormLabel>Task Name</FormLabel>
          <Input type='text' name='title' />
          <FormHelperText>Enter task name</FormHelperText>
        </FormControl>

        <FormControl mb='40px'>
          <FormLabel>Task Description:</FormLabel>
          <Textarea 
            placeholder="Enter Description"
            name="description"
          />
        </FormControl>

        <FormControl display='flex' mb='40px'>
          <Checkbox 
            name='isPriority'
            size='lg'
            colorScheme="purple"
          />
          <FormLabel ml='10px'>Make it a priority</FormLabel>
        </FormControl>
        <Button type='submit'>Submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({request}) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isRequired: data.get('isRequired') === ''
  }

  console.log(task)

  return redirect('/')


}