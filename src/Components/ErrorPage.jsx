import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-lg p-8 rounded-lg shadow-xl">
                <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
                <p className="text-lg mb-8">Oops! The page you are looking for does not exist.</p>
                <Link to="/" className="btn bg-secondary/50 hover:bg-secondary mt-3">Go Home</Link>
            </div>

        </div>
    );
};

export default ErrorPage;
