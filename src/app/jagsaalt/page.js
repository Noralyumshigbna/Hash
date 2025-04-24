"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const originalLoans = [
  { name: "Батмандах", amount: "12,000", phone: "8810–5678", email: "bataa12@gmail.com", address: "45 тоот", status: "Төлсөн" },
  { name: "Эрдэнэзаяа", amount: "24,000", phone: "9902–3412", email: "zaya_qw@mail.com", address: "45 тоот", status: "Төлөөгүй" },
  { name: "Дэлгөөн", amount: "45,000", phone: "9511–7890", email: "doko99@proton.me", address: "45 тоот", status: "Төлөөгүй" },
  { name: "Цог-Эрдэнэ", amount: "456,000", phone: "9603–2255", email: "tsogi_07@outlook.com", address: "45 тоот", status: "Төлсөн" },
  { name: "Мөнхзаяа", amount: "545,545", phone: "7012–8899", email: "zaya_qw@mail.com", address: "45 тоот", status: "Төлсөн" },
  { name: "Цогтгэрэл", amount: "767,000", phone: "8929–2929", email: "tsogi_07@outlook.com", address: "45 тоот", status: "Төлсөн" },
  { name: "Нарансувд", amount: "232,000", phone: "8773–7733", email: "naraa_xx@yahoo.com", address: "45 тоот", status: "Төлсөн" },
  { name: "Батдорж", amount: "56,000", phone: "7012–8899", email: "bataa12@gmail.com", address: "45 тоот", status: "Төлөөгүй" },
];

export default function Home() {
  const [sortOrder, setSortOrder] = useState("old");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredLoans = originalLoans.filter((loan) => {
    if (filterStatus === "all") return true;
    return loan.status === filterStatus;
  });

  const sortedLoans = [...filteredLoans].sort((a, b) => {
    return sortOrder === "new" ? -1 : 1;
  });

  return (
    <main className="flex-grow bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow overflow-y-auto px-10 py-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold">Бүх зээлийн жагсаалт</h1>
            <p className="text-emerald-500 text-sm mt-1">2025.04.01</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Хайх"
                className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm text-black focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="old">Хуучин → Шинэ</option>
              <option value="new">Шинэ → Хуучин</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-gray-100 text-sm px-4 h-6 py-2 rounded-md text-black focus:outline-none"
            >
              <option value="all">Бүгд</option>
              <option value="Төлсөн">Төлсөн</option>
              <option value="Төлөөгүй">Төлөөгүй</option>
            </select>
          </div>
        </div>

        {sortedLoans.length === 0 ? (
          <div className="text-center text-gray-300 py-20 text-lg">Илэрц олдсонгүй</div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white text-black">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium">
                <tr>
                  <th className="px-4 py-2">Зээлдэгч</th>
                  <th className="px-4 py-2">Дүн</th>
                  <th className="px-4 py-2">Утасны дугаар</th>
                  <th className="px-4 py-2">Имэйл</th>
                  <th className="px-4 py-2">Хаяг</th>
                  <th className="px-4 py-2">Байдал</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedLoans.map((loan, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{loan.name}</td>
                    <td className="px-4 py-2">{loan.amount}</td>
                    <td className="px-4 py-2">{loan.phone}</td>
                    <td className="px-4 py-2">{loan.email}</td>
                    <td className="px-4 py-2">{loan.address}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`text-sm px-3 py-1 rounded-full font-medium ${
                          loan.status === "Төлсөн"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {loan.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-6 px-4 pb-4">
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">&lt;</button>
                <button className="px-3 py-1 rounded-md bg-purple-600 text-white text-sm">1</button>
                <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">2</button>
                <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">3</button>
                <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">4</button>
                <span className="text-gray-500 px-2">…</span>
                <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">40</button>
                <button className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">&gt;</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
