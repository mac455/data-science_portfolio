import '../app/globals.css';

export default function Home() {
  return (
    <div>
      {/* Navbar Section */}
      <div className="flex justify-between items-center bg-black opacity-90 h-24 fixed top-0 left-0 right-0 z-50">
        <ul className="flex space-x-8 font-opensans text-white ml-8 text-2xl font-thin">
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    );
}
