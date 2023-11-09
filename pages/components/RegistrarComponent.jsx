import { useState } from 'react';
import axios from 'axios';

export default function RegisterComponent() {
    const [formData, setFormData] = useState({ nome: '', sobrenome: '', email: '', senha: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:9999/computador', formData);
        } catch (error) {
            console.error('deu ruim:', error);
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-black">
                <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <h1 className='flex justify-center text-white text-4xl p-10 gap-4 '>Criar um computador</h1>

                    <div>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                    </div>

                    <div>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="descricao" placeholder="Descricão" value={formData.descricao} onChange={handleChange} />
                    </div>

                    <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-[20px]">Criar</button>
                </form>
            </div>
        </>
    )
}