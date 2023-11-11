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
        console.log(response)
      } catch (error) {
        console.error('deu ruim:', error);
      }
    }

    fetchDataFromBackend();
  }, []);

  return (
    <div >

      <div className="w-full h-[1px]  pt-6"></div>

      <div className="flex justify-center  items-center pb-4">
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none ">
            <div className="flex justify-center items-center h-full w-full">
              <img className="w-[60%] h-[60%]" src="https://cdn-icons-png.flaticon.com/512/2426/2426194.png" alt="" />
            </div>
          </button>
        </div>
        <div className="bg-[#A4A4A4] w-[6rem] h-3"></div>
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none">
            <div className="flex justify-center items-center h-full w-full">

            </div>
          </button>
        </div>
        <div className="bg-[#A4A4A4] w-[6rem] h-3"></div>
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none">
            <div className="flex justify-center items-center h-full w-full">

            </div>
          </button>
        </div>
        <div className="bg-[#A4A4A4] w-[6rem] h-3"></div>
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none">
            <div className="flex justify-center items-center h-full w-full">

            </div>
          </button>
        </div>
        <div className="bg-[#A4A4A4] w-[6rem] h-3"></div>
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none">
            <div className="flex justify-center items-center h-full w-full">

            </div>
          </button>
        </div>
        <div className="bg-[#A4A4A4] w-[6rem] h-3"></div>
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none">
            <div className="flex justify-center items-center h-full w-full">

            </div>
          </button>
        </div>
        <div className="bg-[#A4A4A4] w-[6rem] h-3"></div>
        <div className="">
          <button className="rounded-xl bg-[#A4A4A4] h-[6rem]  w-[6rem] outline-none">
            <div className="flex justify-center items-center h-full w-full">

            </div>
          </button>
        </div>
      </div>
      <div className="">
        <div className=" bg-black flex items-center h-full">
          <span className=" p-10"><input type="radio" /></span>
          <div><img className="w-[150px]" src="data:image/jpeg;base64,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" alt="" /></div>
        </div>
        <div>
          <div>
            <span>Descricao do produto</span>
          </div>
          <div>
            <div>
              <span>preco</span>
            </div>
          </div>
          <div>
            <button>adicionar</button>
          </div>
        </div>
      </div>
    </div>
  )
}