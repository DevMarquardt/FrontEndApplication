import { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
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
            <div className="flex justify-center flex-col items-center h-[20rem]">

                <h1 className=' text-black text-4xl pb-10'>De um nome ao computador</h1>
                <form className='flex flex-col gap-2 ' onSubmit={handleSubmit} >
                    <div>
                        <input className="bg-gray-100 border shadow-none border-none outline-none text-sm rounded-lg  w-full p-2.5" type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                    </div>

                    <div>
                        <input className="bg-gray-100 border shadow-none border-none outline-none text-sm rounded-lg  w-full p-2.5" type="text" name="descricao" placeholder="Descricão" value={formData.descricao} onChange={handleChange} />
                    </div>
                    <div className='flex justify-center pt-10'>
                        <button onClick={() => location.reload()} type="submit" className='w-[10rem] h-[4rem] rounded-2xl text-white  duration-700 bg-gradient-to-r from-blue-700 to-pink-800 bg-size-200 bg-pos-0 hover:bg-pos-100'>Criar</button>
                    </div>
                </form>

            </div>
        </>
    )
}