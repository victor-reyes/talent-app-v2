import { ReactNode } from "react";

type Props = {
 children: ReactNode
 textColor?: string,
}
export function HeaderH2({children, textColor}:Props){
 return (
   <h2 className={`text-2xl font-bold ${textColor}`}>
     {children}
   </h2>
 );
}