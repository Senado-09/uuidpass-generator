

interface HeaderProps {
  setPage: (page: string) => void;
}

function Header({ setPage }: HeaderProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md w-full">
    {/* Logo */}
    <div className="flex items-center text-xl font-bold space-x-4 mb-2">
      <img src="src/assets/logo.jpg" alt="Logo Uuid Pass Generator" className="h-8 w-8" />
      <span>Uuid Pass Generator</span>
    </div>
    
    {/* Navigation */}
    <nav className="flex space-x-6 bg-[#526AF2] text-white px-6 rounded-xl shadow-lg">
      <a onClick={() => setPage("password")} className="cursor-pointer px-4 py-2 rounded-xl hover:bg-[#414AF2] transition">
        Password Generator
      </a>
      <a onClick={() => setPage("uuid")} className="cursor-pointer px-4 py-2 rounded-xl hover:bg-[#414AF2] transition">
        UUID Generator
      </a>
    </nav>
  </div>
  );
}

export default Header;
