"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Footer from "@/components/footer";
import Header2 from "@/components/header2";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      label: "Төлбөр",
      data: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700],
      backgroundColor: ["rgba(138, 43, 226, 0.8)"],
      Radius: 5,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
    },
  },
};

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  // Search term state

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Searching for:", searchTerm);
    // You can now filter your loan data based on the search term
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white flex flex-col ">
      <Header2 />
      <main className="w-full flex flex-col items-center flex-grow px-6 py-8">
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Table */}
          <div className="w-full h-[600px] bg-white/70 text-black p-4 rounded-[2rem] shadow-md flex flex-col">
            <h2 className="w-full text-xl font-bold">Бүх зээлийн жагсаалт</h2>

            {/* Search & Sort */}
            <div className="w-full flex justify-between items-center my-4">
              <input
                type="text"
                placeholder="Хайх"
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 rounded w-1/2 border border-gray-300"
              />
              <select className="p-2 rounded border border-gray-300">
                <option>Шинэ → Хуучин</option>
                <option>Хуучин → Шинэ</option>
              </select>
            </div>

            {/* Table Container (Scrollable) */}
            <div className="w-full flex-grow overflow-auto rounded-lg ">
              <table className="w-full border-collapse">
                {/* Table Header (Sticky) */}
                <thead className="sticky top-0 bg-gray-200">
                  <tr className="text-gray-600">
                    <th className="min-w-[200px] p-2">Зээлдэгч</th>
                    <th className="min-w-[200px] p-2">Дүн</th>
                    <th className="min-w-[100px] p-2">Утасны дугаар</th>
                    <th className="min-w-[150px] p-2">Имэйл</th>
                    <th className="p-2">Хугацаа</th>
                    <th className="p-2">Байдал</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-white">
                  {[...Array(8)].map((_, i) => (
                    <tr key={i} className="">
                      <td className="p-2 ">Зээлдэгч {i + 1}</td>
                      <td className="p-2">{(i + 1) * 12000}</td>
                      <td className="p-2">8810-5678</td>
                      <td className="p-2">email@example.com</td>
                      <td className="p-2">45 тоот</td>
                      <td className="p-2">
                        {i % 2 === 0 ? (
                          <span className="bg-green-200 text-green-700 px-2 py-1 rounded">
                            Төлсөн
                          </span>
                        ) : (
                          <span className="bg-red-200 text-red-700 px-2 py-1 rounded">
                            Төлөөгүй
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="h-8 flex mt-auto justify-end items-center p-2">
              <div className="flex gap-2 items-center">
                <button className="bg-gray-200 text-gray-700 h-6 w-6 text-xs flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-300 disabled:opacity-50">
                  &lt;
                </button>
                {[1, 2, 3, 4, 5].map((page, index) => (
                  <div
                    key={index}
                    className={`h-6 w-6 text-xs flex items-center justify-center rounded-md cursor-pointer ${
                      page === 1
                        ? "bg-gray-300 text-black font-bold"
                        : "bg-white hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </div>
                ))}
                <button className="bg-gray-200 text-gray-700 h-6 w-6 text-xs flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-300 disabled:opacity-50">
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full grid gap-4 grid-cols-2">
            <div className="w-full col-span-2 bg-white text-black p-4 flex justify-center items-center rounded-lg shadow-md">
              <Bar data={barData} options={barOptions} />
            </div>

            <div className="w-full bg-white text-black p-4 rounded-lg shadow-md ">
              <h3 className="text-lg font-bold">Зээл нэмэх</h3>
              <input
                type="text"
                placeholder="Нэмэх дүн"
                className=" p-2 w-full mt-2 rounded"
              />
              <button
                className="bg-purple-600 text-white p-2 w-full mt-2 rounded-3xl"
                onClick={() => setShowModal(true)}
              >
                Үргэлжлүүлэх
              </button>
            </div>
            <div className="w-full bg-white text-black p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Зээл хасах</h3>
              <input
                type="text"
                placeholder="Нэмэх дүн"
                className=" p-2 w-full mt-2 rounded"
              />
              <button
                className="bg-purple-600 text-white p-2 w-full mt-2 rounded-3xl"
                onClick={handleSearchClick} // Search functionality on click
              >
                Хайх
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white text-black p-6 rounded-2xl w-full max-w-xl shadow-lg relative">
              <h2 className="text-xl font-bold mb-4">Зээл нэмэх</h2>

              <div className="flex flex-col gap-3">
                <label>
                  Зээлдэгчийн хаяг :
                  <input
                    type="text"
                    placeholder="Зээлдэгчийн хаягийг оруулна уу"
                    className="w-full p-2 mt-1 rounded border border-gray-300 text-sm"
                  />
                </label>
                <label>
                  Холбогдох утасны дугаар 1 :
                  <input
                    type="text"
                    placeholder="Зээлдэгчийн утасны дугаарыг оруулна уу"
                    className="w-full p-2 mt-1 rounded border border-gray-300 text-sm"
                  />
                </label>
                <label>
                  Холбогдох утасны дугаар 2 :
                  <input
                    type="text"
                    placeholder="Зээлдэгчийн утасны дугаарыг оруулна уу"
                    className="w-full p-2 mt-1 rounded border border-gray-300 text-sm"
                  />
                </label>
                <label>
                  Нийт дүн:
                  <input
                    type="number"
                    placeholder="Нийт дүнг оруулна уу"
                    className="w-full p-2 mt-1 rounded border border-gray-300 text-sm"
                  />
                </label>
                <label>
                  Авсан барааны жагсаалт :
                  <input
                    type="text"
                    placeholder="Авсан барааны дэлгэрэнгүй тайлбарыг оруулна уу"
                    className="w-full p-2 mt-1 rounded border border-gray-300 text-sm"
                  />
                </label>
                <label>
                  Зээл авсан огноо :
                  <input
                    type="date"
                    className="w-full p-2 mt-1 rounded border border-gray-300"
                  />
                </label>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Болих
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Нэмэх
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
