import { addDeveloperAction } from "../actions";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

<<<<<<< HEAD
=======
{
  /* <Pencil type="submit" />
    <Form action={addDeveloperAction}>
      <input type="text" name="name" />
      <input type="text" name="title" />
      <input type="text" name="bio" />
    </Form> */
}

>>>>>>> af65bf0 (using modal to edit developer info)
export function EditInfoForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
<<<<<<< HEAD
        <Pencil
          className="hover:cursor-pointer hover:text-primary"
          type="submit"
        />
=======
        <Pencil type="submit" />
>>>>>>> af65bf0 (using modal to edit developer info)
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
<<<<<<< HEAD
            Make changes to your profile here. Click save when you are done.
=======
            Make changes to your profile here. Click save when you're done.
>>>>>>> af65bf0 (using modal to edit developer info)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Title
            </label>
            <input id="title" defaultValue="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="bio" className="text-right">
              Bio
            </label>
            <input id="bio" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" formAction={addDeveloperAction}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
