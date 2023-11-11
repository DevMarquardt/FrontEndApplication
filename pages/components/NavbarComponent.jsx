export default function NavbarComponent() {
    return (
        <>
            <nav className="bg-gradient-to-r from-blue-900 to-pink-800">
                <div class="flex items-center justify-between mx-auto p-4">
                <a href="/" class="text-2xl font-semibold text-white pl-4 duration-700 hover:text-fuchsia-200 outline-none">Cadastro de PC</a>

                    <a class=""></a>
                    <div class="w-auto">
                        <ul class="text-xl font-bold flex p-4  mt-4 ">
                            <li> 
                                <a href="/" class="py-2 pl-3 pr-4 text-white duration-700 hover:text-fuchsia-200 outline-none">Home</a>
                            </li>
                            <li>
                                <a href="tabela" class="py-2 pl-3 pr-4 text-white duration-700 hover:text-fuchsia-200 outline-none">Seus computadores</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}