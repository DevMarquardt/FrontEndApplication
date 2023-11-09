import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">ID</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Nome</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Descrição</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Preço</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
              <td id='id' className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.id}</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.nome}</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.descricao}</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{item.preco}</td>
              <td id='funcao' className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                <button onClick={() => location.href = "editar"} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Editar</button>
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
                })}} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isVisible={showModal2} onClose={() => setShowModalExcluir(false)} >
        <div>
          <p className='flex justify-center'>Tem certeza que deseja deletar este computador?</p>
          <div className='flex justify-center items-center p-10'>
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => deletar(id)}>Excluir</button>
            <button onClick={() => setShowModalExcluir(false)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DataList;
