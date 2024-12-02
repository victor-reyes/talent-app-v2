import { ReactNode } from "react";

type Props = {
 children: ReactNode
 textColor?: string,
}
export function HeaderH1({children, textColor}:Props){
 return (
   <h1 className={`text-4xl font-bold ${textColor}`}>
     {children}
   </h1>
 );
}