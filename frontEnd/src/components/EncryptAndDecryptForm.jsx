import { useState } from "react";
import axios from "axios";

export default function EncryptAndDecryptForm() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Input is required!");
      return;
    }
    setError("");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/convert", input, {
        headers: { "Content-Type": "text/plain" },
      });

      setResult(res.data);
    } catch (error) {
      setResult({
        output: "Error processing request",
        symmetricKey: "",
        asymmetricKey: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 shadow-2xl rounded-2xl w-[450px] min-h-[500px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Encrypt & Decrypt
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg text-gray-700 font-semibold mb-3">
              Enter Text:
            </label>
            <input
              type="text"
              placeholder="Type here..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setResult(null); 
              }}
              className="border border-gray-300 p-3 text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white text-lg font-semibold px-4 py-3 rounded-lg w-full hover:bg-blue-600 transition mt-4 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-700">
            <p className="font-medium text-lg mb-2">Response:</p>
            <div className="text-sm space-y-2">
              <div className="flex">
                <strong className="w-1/3">Output:</strong>
                <span className="w-2/3 break-words">
                  {result.output || "-"}
                </span>
              </div>
              <div className="flex">
                <strong className="w-1/3">Symmetric Key:</strong>
                <span className="w-2/3 break-words">
                  {result.symmetricKey || "-"}
                </span>
              </div>
              <div className="flex">
                <strong className="w-1/3">Asymmetric Key:</strong>
                <span className="w-2/3 break-words">
                  {result.asymmetricKey || "-"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
