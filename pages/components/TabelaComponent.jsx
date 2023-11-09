import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const DataList = () => {

  const [showModal, setShowModalEditar] = useState(false);
  const [data, setData] = useState([]);

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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">ID</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Nome</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Descrição</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.id}</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.nome}</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.descricao}</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                <button onClick={() => setShowModalEditar(true)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Editar</button>
                <button onClick={() => setShowModalEditar(true)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Modal isVisible={showModal} onClose={() => setShowModalEditar(false)} />
    </div>
  );
};

export default DataList;
