import { Assignment as AssignmentType } from "../../types";
import { Assignment } from "../assignment";


type Props = {
  assignments: AssignmentType[]
}

export function Assignments({assignments}: Props) {

  return (
    <>
    {assignments.map((assignment) => {
      return <Assignment key={assignment.id} assignment={assignment}/>
    })}
    </>
  );
}
