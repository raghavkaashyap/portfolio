import React from 'react';

// eslint-disable-next-line react/prop-types
const ResumeModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-3xl relative">
                <button
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>
                <div className="flex flex-col items-center justify-center h-96 text-center">
                    <div className="text-9xl mb-4">🚧</div>
                    <p className="text-2xl font-semibold text-gray-800">Under Construction</p>
                    <p className="text-gray-600 mt-2">Please check back later!</p>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
