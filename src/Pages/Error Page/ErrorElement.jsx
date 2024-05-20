import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
                <p className="text-gray-700 mb-6">Something went wrong. Please try again later.</p>
                <Link to='/'><button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                    Go Back
                </button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;
