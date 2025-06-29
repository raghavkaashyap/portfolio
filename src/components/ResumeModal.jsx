import React from 'react';

// eslint-disable-next-line react/prop-types
const ResumeModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-3xl">
                <button
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>
                <iframe
                    src="/assets/Raghav_Portfolio_Resume_recent.pdf"
                    className="w-full h-96"
                    title="Resume"
                />
            </div>
        </div>
    );
};

export default ResumeModal;
