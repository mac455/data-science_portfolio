
import Link from 'next/link';
import '../app/globals.css';


export default function Home() {
  return (
    <div>
      {/* Navbar Section */}
      <div className="flex justify-between place-content items-center bg-white h-24 fixed top-0 left-0 right-0 z-50 shadow-lg px-8 pr-10" >
        <div>
          <Link href="/"><h1 className='ml-20 font-inter font-bold text-3xl' >Mcanthony Otuonye</h1></Link>
         </div>
        <ul className="flex space-x-8 font-opensans text-black font-bold mr- text-2xl ">
          <Link href="/about"><li>About me</li></Link>
          <Link href="/portfolio"><li>Portfolio</li></Link>
          <Link href="/cv"><li>CV</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
        


      </div>
    </div>
    );
}
