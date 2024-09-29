// src/hooks/useAuth.js
import { useEffect, useState } from "react";
import { auth } from "../config/firebase-config";

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await auth.signOut();
    };

    return { user, logout };
};
