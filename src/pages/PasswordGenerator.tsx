import { useState, useEffect, useCallback } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import AdBannerBottom from "../components/AdBannerBottom";


const PasswordGenerator = () => {

  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [copying, setCopying] = useState(false);

  const generatePassword = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      let chars = "abcdefghijklmnopqrstuvwxyz";
      if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (includeNumbers) chars += "0123456789";
      if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?/";
      
      let generatedPassword = "";
      for (let i = 0; i < length; i++) {
        generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setPassword(generatedPassword);
      setLoading(false);
    }, 1000); // Simulating loading effect
  }, [includeUppercase, includeNumbers, includeSymbols, length]);

  useEffect(() => {
    generatePassword(); // Generate a password when the component mounts
  }, [generatePassword]);

  const copyToClipboard = () => {
    setCopying(true);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopying(false);
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-2xl text-[#D97941] font-bold mb-4">Password Generator</h1>
      <div className="p-4 bg-white shadow-md rounded-lg max-w-md">

      <h2 className="text-[#D97941] font-semibold mb-4">Generate Password</h2>

        <div className="mb-4">
          {password && !loading && (
            <div className="mt-4 p-2 bg-blue-50 rounded-lg text-center font-mono font-bold text-lg">{password}</div>
          )}
          
        </div>

        <div className="mb-4">
          <label className="block mb-1">Length: {length}</label>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setLength((prev) => Math.max(6, prev - 1))} 
              className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
            <button 
              onClick={() => setLength((prev) => Math.min(30, prev + 1))} 
              className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
            <span className="ml-2">Include Uppercase</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
            <span className="ml-2">Include Numbers</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
            <span className="ml-2">Include Symbols</span>
          </label>
        </div>
        <div className="flex space-x-2 mb-4">
          <button onClick={generatePassword} 
            className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 flex items-center justify-center">
            {loading ? <AiOutlineLoading3Quarters className="animate-spin text-xl" /> : "Generate Password"}
          </button>
          <button onClick={copyToClipboard} 
            className="bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-600 flex items-center justify-center" >
          {copying ? <AiOutlineLoading3Quarters className="animate-spin text-xl" /> : <FiCopy className="text-xl" />} 
        </button>
        </div>
        
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg mt-8 max-w-lg">
          <AdBannerBottom/>
        </div>
    </div>
  )
}

export default PasswordGenerator