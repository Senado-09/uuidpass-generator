import { useState } from "react";
import AdBannerBottom from "../components/AdBannerBottom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";

const UuidGenerator = () => {

    const [uuid, setUuid] = useState("Click Generate");
    const [loading, setLoading] = useState(false);
    const [copying, setCopying] = useState(false);
  
    const generateUuid = () => {

      setLoading(true);
      setTimeout(() => {
        const newUuid = crypto.randomUUID();
        setUuid(newUuid);
        setLoading(false);
      }, 1000);
      
    };
  
    const copyToClipboard = (text: string): void => {
      setCopying(true);
      navigator.clipboard.writeText(text);
      setTimeout(() => {
        setCopying(false);
      }, 1000);
    };

  return (
    <div>
        <h1 className="text-2xl text-[#D97941] font-bold mb-4">UUID Generator</h1>

        <div className="p-4 bg-white shadow-md rounded-lg max-w-md">
          <h2 className="text-[#D97941] font-semibold mb-4">Generate UUID</h2>
          <div className="mb-4">
            {uuid && (
              <div className="mt-4 p-2 bg-blue-50 rounded-lg text-center font-mono">{uuid}</div>
            )}
          </div>
          
          <div className="flex space-x-2 mb-4">
            <button onClick={generateUuid} 
              className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 flex items-center justify-center">
              {loading ? <AiOutlineLoading3Quarters className="animate-spin text-xl" /> : "Generate UUID"}
            </button>
            <button onClick={() => copyToClipboard(uuid)} 
              className="bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-600 flex items-center justify-center">
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

export default UuidGenerator