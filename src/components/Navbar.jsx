
const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <ul className="m-8 flex items-center justify-center gap-4 text-2xl">
                <li>Home</li>
                <li>Projects</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
            <button>Resume</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
