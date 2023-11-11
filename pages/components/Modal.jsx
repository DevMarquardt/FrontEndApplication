import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="w-[600px] flex flex-col ">
                <button onClick={() => onClose()} className="text-white text-bold text-xl place-self-end duration-500 hover:text-red-600">X</button>
                <div className=" bg-white p-2 rounded-[40px]">{children}</div>
            </div>
        </div>
    )
}

export default Modal;