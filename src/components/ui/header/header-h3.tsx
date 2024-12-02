import { ReactNode } from "react";

type Props = {
 children: ReactNode
 textColor?: string,
}
export function HeaderH3({children, textColor}:Props){
 return (
   <h3 className={`text-xl font-bold ${textColor}`}>
     {children}
   </h3>
 );
}