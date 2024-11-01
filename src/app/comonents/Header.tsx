import Link from "next/link"
interface HeaderProps {
    font: {
      className: string;
    };
  }
export default function Header (data:HeaderProps){
    return(
    <>
    <div className={`${data.font.className} header`}>
        <ul className="links">
            <li><Link className="link" href="/" >Works</Link></li>
            <li><Link className="link" href="/">Blogs</Link></li>
            <li><Link className="link" href="/">Contact</Link></li>
        </ul>
    </div>
    
    
    
    
    </>
    )
}