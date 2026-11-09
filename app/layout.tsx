import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"ForgeProof — evidence from the bench",description:"A demo proof-of-work passport for independent makers."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
