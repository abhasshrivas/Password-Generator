import { useState } from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(false);

    const generatePassword = () => {
        let chars = "";

        if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) chars += "0123456789";
        if (symbols) chars += "!@#$%^&*()";

        let generated = "";

        for (let i = 0; i < length; i++) {
            generated += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setPassword(generated);
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
        alert("Password Copied!");
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    Password Generator
                </h1>

                <div className="flex mb-4">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className="w-full p-3 rounded-l-lg bg-gray-700 text-white outline-none"
                    />

                    <button
                        onClick={copyPassword}
                        className="bg-blue-500 px-4 rounded-r-lg text-white"
                    >
                        Copy
                    </button>
                </div>

                <div className="mb-4">
                    <label className="text-white">
                        Password Length: {length}
                    </label>

                    <input
                        type="range"
                        min="4"
                        max="20"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full"
                    />
                </div>

                <div className="space-y-2 text-white">
                    <label className="flex gap-2">
                        <input
                            type="checkbox"
                            checked={uppercase}
                            onChange={() => setUppercase(!uppercase)}
                        />
                        Uppercase
                    </label>

                    <label className="flex gap-2">
                        <input
                            type="checkbox"
                            checked={lowercase}
                            onChange={() => setLowercase(!lowercase)}
                        />
                        Lowercase
                    </label>

                    <label className="flex gap-2">
                        <input
                            type="checkbox"
                            checked={numbers}
                            onChange={() => setNumbers(!numbers)}
                        />
                        Numbers
                    </label>

                    <label className="flex gap-2">
                        <input
                            type="checkbox"
                            checked={symbols}
                            onChange={() => setSymbols(!symbols)}
                        />
                        Symbols
                    </label>
                </div>

                <button
                    onClick={generatePassword}
                    className="w-full bg-green-500 text-white py-3 rounded-lg mt-6 hover:bg-green-600"
                >
                    Generate Password
                </button>
            </div>
        </div>
    );
}

export default App;
