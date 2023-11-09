import { useState } from "react";
import Modal from "./modal"
export default function EditarComponent() {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);


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
                    <p>1</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <button onClick={() => setShowModal2(true)} className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>

                    </div>
                </button>
            </div>
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)} >
                <div className="h-[50rem] w-[75rem]">
                    <p>2</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <button onClick={() => setShowModal3(true)} className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>

                    </div>
                </button>
            </div>
            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)} >
                <div className="h-[50rem] w-[75rem]">
                    <p>3</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <button onClick={() => setShowModal4(true)} className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>

                    </div>
                </button>
            </div>
            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)} >
                <div className="h-[50rem] w-[75rem]">
                    <p>4</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <button onClick={() => setShowModal5(true)} className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>

                    </div>
                </button>
            </div>
            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)} >
                <div className="h-[50rem] w-[75rem]">
                    <p>5</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

            <div className="p-6">
                <button onClick={() => setShowModal6(true)} className="bg-[#A4A4A4] h-[6rem]  w-[6rem]">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="bg-black h-10 w-2 absolute "></div>
                        <div className="bg-black h-2 w-10 "></div>

                    </div>
                </button>
            </div>
            <Modal isVisible={showModal6} onClose={() => setShowModal6(false)} >
                <div className="h-[50rem] w-[75rem]">
                    <p>6</p>
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

        </div>
    )
}