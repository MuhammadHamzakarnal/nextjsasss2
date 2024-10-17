import Link from "next/link"
function Header (){
    return(
        <div>
            
            <nav className="flex justify-center p-5 bg-slate-500">
                
                <li className="mr-12 list-none hover:bg-gray-700 p-2 rounded"><Link href="##">Home</Link></li>
                <li className="mr-12 list-none hover:bg-gray-700 p-2 rounded"><Link href="##">About</Link></li>
                <li className="mr-12 list-none hover:bg-gray-700 p-2 rounded"><Link href="##">Contact</Link></li>
            </nav> 
        </div> 
    )
 }
export default Header;