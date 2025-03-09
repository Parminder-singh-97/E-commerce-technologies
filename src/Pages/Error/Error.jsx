import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-100 text-gray-800">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mb-4">Oops! The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
