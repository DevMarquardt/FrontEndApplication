import { useState, useEffect } from "react";
import Modal from "./modal"
import axios from "axios";

export default function EditarComponent() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      async function fetchDataFromBackend() {
        try {
          const response = await axios.get('http://localhost:9999/peca');
          setData(response.data);
        } catch (error) {
          console.error('deu ruim:', error);
        }
      }
  
      fetchDataFromBackend();
    }, []);

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
                    
                </div>
            </Modal>
            <div className="w-full h-[1px] bg-black"></div>

        </div>
    )
}