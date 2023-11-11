import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import RegistrarComponent from "./RegistrarComponent"

async function deletar(id) {
  try {
    await axios.delete(`http://localhost:9999/computador/${id}`)
    // console.log(item.id)
  } catch (error) {
    console.error('deu ruim:', error);
  }
}

const DataList = () => {

  const [showModal2, setShowModalExcluir] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(0)

  useEffect(() => {
    async function fetchDataFromBackend() {
      try {
        const response = await axios.get('http://localhost:9999/computador');
        setData(response.data);
      } catch (error) {
        console.error('deu ruim:', error);
      }
    }

    fetchDataFromBackend();
  }, []);

  return (
    <div className='h-full bg-gradient-to-r '>
      <div>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              <th scope="col" className="pl-3 py-3">ID</th>
              <th scope="col" className="pl-3 py-3">Nome</th>
              <th scope="col" className="pl-3 py-3">Descrição</th>
              <th scope="col" className="pl-3 py-3">Preço</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 ">
                <td  className="pl-3"id='id' >{item.id}</td>
                <td  className="pl-3">{item.nome}</td>
                <td  className="pl-3">{item.descricao}</td>
                <td  className="pl-3">R$ Falta fazer</td>
                <td id='funcao' className="px-6 py-3 flex justify-evenly">
                  <button onClick={() => location.href = "editar"} className=" w-[5rem] h-[3rem] text-white rounded-xl duration-700 bg-gradient-to-r from-blue-700 to-pink-800 bg-size-200 bg-pos-0 hover:bg-pos-100">Editar</button>
                  <button onClick={(e) => {
                    setShowModalExcluir(true)
                    const ids = document.querySelectorAll('#id')
                    const funcoes = document.querySelectorAll('#funcao')
                    ids.forEach(element => {
                      funcoes.forEach(elementDel => {
                        if (elementDel.parentNode === element.parentNode && e.target.parentNode.parentNode === elementDel.parentNode) {
                          setId(element.innerHTML)
                        }
                      });
                    })
                  }} className=" w-[5rem] h-[3rem] text-white rounded-xl duration-700 bg-gradient-to-r from-red-700 to-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal isVisible={showModal2} onClose={() => setShowModalExcluir(false)} >
          <div>
            <h1 className='flex justify-center'>Tem certeza que deseja deletar este computador?</h1>
            <div className='flex justify-center items-center p-10'>
              <button onClick={() => { deletar(id); location.reload() }} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Excluir</button>
              <button onClick={() => setShowModalExcluir(false)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancelar</button>
            </div>
          </div>
        </Modal>

      </div>

      <div className='flex justify-center pt-10'>
        <button className='w-[7rem] h-[7rem] text-white rounded-full duration-700 bg-gradient-to-r from-blue-700 to-pink-800 bg-size-200 bg-pos-0 hover:bg-pos-100' onClick={() => setShowModalRegister(true)}>
          <div className="flex justify-center items-center h-full w-full">
            <div className="bg-white h-10 w-2 absolute"></div>
            <div className="bg-white h-2 w-10"></div>
          </div>
        </button>
      </div>

      <Modal isVisible={showModalRegister} onClose={() => setShowModalRegister(false)}>
        <RegistrarComponent className="absolute"></RegistrarComponent>
      </Modal>
    </div>
  );
};

export default DataList;
