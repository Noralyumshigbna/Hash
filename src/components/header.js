import Logo from "./logo";

export default function Header() {
    return (
      <header className="text-white rounded-b-[3rem] w-full flex items-center justify-between p-6 ">
        <div>
          <Logo/>
        </div>
  
        <nav className="hidden md:flex flex-1 justify-start text-sm ml-12">
          <ul className="flex gap-12">
            <li className="font-bold cursor-pointer hover:text-gray-400">
              Бидний тухай
            </li>
            <li className="font-bold cursor-pointer hover:text-gray-400">
              Тусламж
            </li>
            <li className="font-bold cursor-pointer hover:text-gray-400">
              Холбоо барих
            </li>
          </ul>
        </nav>
  
        <div className="flex gap-4">
          <button className="w-24 h-8 bg-purple-600 rounded-full hover:bg-purple-800 transition duration-300">
            Нэвтрэх
          </button>
          <button className="w-24 h-8 bg-gray-400 rounded-full hover:bg-gray-500 transition duration-300">
            Бүртгүүлэх
          </button>
        </div>
      </header>
    );
  }
  