"use client";

import { useState } from "react";

const products = ["Keane", "Basque", "Milano", "SH", "Dawson", "Blake"];

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    product: products[0],
    quantity: 1,
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Data:", form);
    alert(
      `Terima kasih ${form.name}, order Anda untuk ${form.product} sudah terkirim!`
    );
  };

  return (
    <section className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Checkout Order
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama */}
          <div>
            <label className="block mb-2 text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Perusahaan */}
          <div>
            <label className="block mb-2 text-gray-700">Perusahaan</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="block mb-2 text-gray-700">Alamat Lengkap</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Produk */}
          <div>
            <label className="block mb-2 text-gray-700">Produk</label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {products.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-2 text-gray-700">Jumlah</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              min={1}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Catatan */}
          <div>
            <label className="block mb-2 text-gray-700">Catatan</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Tombol Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Kirim Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
