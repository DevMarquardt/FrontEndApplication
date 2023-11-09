import { useState } from "react";
import Modal from "./modal"
export default function EditarComponent() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div >

            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <button onClick={() => setShowModal(true)} className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>

                    </div>
                </button>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
                <div className="h-[50rem] w-[75rem]">
                    <p>adsadadasdsad</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <div className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <div className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <div className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <div className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <div className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-black"></div>
        </div>
    )
}