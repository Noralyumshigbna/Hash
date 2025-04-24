export default function Footer() {
  return (
    <footer className="text-white w-full flex flex-col items-center px-6 py-12 sm:px-12 sm:py-16 ">
      <div className="w-full text-center sm:text-left">
        <h1 className="text-md font-semibold">Хурдан Аюулгүй Шуурхай</h1>
      </div>

      <div className="w-full border-t border-gray-600 my-6"></div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
        <h1 className="w-full text-md font-semibold">Хурдан Аюулгүй Шуурхай, Хурдан Аюулгүй Шуурхай</h1>
        <div className="flex flex-col  w-full justify-end sm:flex-row gap-4 sm:gap-6 text-sm">
          <h2 className="cursor-pointer hover:text-gray-400">Cookies</h2>
          <h3 className="cursor-pointer hover:text-gray-400">Accessibility</h3>
          <h4 className="cursor-pointer hover:text-gray-400">About</h4>
        </div>
      </div>
    </footer>
  );
}
