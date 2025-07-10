'use client';

import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-4">Something went wrong!</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                An unexpected error has occurred. Please try again or return to the homepage.
            </p>
            <div className="flex space-x-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-md transition-colors"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
}
