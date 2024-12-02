import Form from "next/form";
import { Button } from "@/components/ui/button";
import { addDeveloperAction } from "../actions";

export function FormInfo() {
  return (
    <Form action={addDeveloperAction}>
      <input type="text" name="name" />
      <input type="text" name="title" />
      <input type="text" name="bio" />
      <Button type="submit">Add Developer</Button>
    </Form>
  );
}
