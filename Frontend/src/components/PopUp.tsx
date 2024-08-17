import React, { useState, useEffect } from 'react';
import TextExo2Font from "./typography/TextExo2Font.tsx";

interface PopUpProps {
    message: string;
    onClose: () => void;
}

function PopUp({ message, onClose }: PopUpProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1500);

        return () => clearTimeout(timer);
    }, );

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <TextExo2Font className="font-bold bg-white border-red-600 border-2 text-red-500 p-4 rounded-xl drop-shadow-xl text-center opacity-100 transition-opacity duration-300">
                {message}
            </TextExo2Font>
        </div>
    );
}

export default PopUp;