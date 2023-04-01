import React, { useState } from "react";
import { instance as api } from "../utils/ironbeam/api";

const Login = () => {
    const [username, setUsername] = useState(api.getUsername());
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        api.setUsername(username);
        api.setPassword(password);
        api.connect(() => {
            console.log("Connected");
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Account Number"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

