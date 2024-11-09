// SplashScreen.tsx
import React, { useEffect, useState } from "react";

const SplashScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute z-50 top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-defYellow">
            <h1 className="text-4xl font-bold text-black mb-8">Daily Blogger</h1>
            <div className="w-1/2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-black transition-all duration-150 rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="text-black mt-4">{progress}%</p>
        </div>
    );
};

export default SplashScreen;
