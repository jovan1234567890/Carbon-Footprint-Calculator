// src/pages/CarbonCalculator.jsx
import React, { useState } from 'react';
import { Calculator, Car, Home, Utensils, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion'; // 

export default function CarbonCalculator() {
  const [transport, setTransport] = useState({ carMiles: '', flights: '' });
  const [energy, setEnergy] = useState({ electricity: '', gas: '' });
  const [diet, setDiet] = useState({ meat: 'moderate' });

  const calculateFootprint = () => {
    const transportEmission = transport.carMiles * 0.404 + transport.flights * 90;
    const energyEmission = energy.electricity * 0.233 + energy.gas * 2.05;
    const dietEmission = diet.meat === 'high' ? 3 : diet.meat === 'low' ? 1 : 2;
    return (transportEmission + energyEmission + dietEmission).toFixed(2);
  };

  const total = calculateFootprint();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50 py-10 px-4"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-3">
            <Calculator className="size-12 text-emerald-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Carbon Footprint Calculator</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Masukkan kebiasaan sehari-hari untuk menghitung perkiraan jejak karbon tahunan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Transport */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Car className="size-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Transportasi</h2>
              </div>
              <label className="block mb-3">
                Miles mobil/tahun:
                <input
                  type="number"
                  value={transport.carMiles}
                  onChange={(e) => setTransport({ ...transport, carMiles: Number(e.target.value) })}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </label>
              <label className="block">
                Jumlah penerbangan jarak jauh/tahun:
                <input
                  type="number"
                  value={transport.flights}
                  onChange={(e) => setTransport({ ...transport, flights: Number(e.target.value) })}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </label>
            </section>

            {/* Energy */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Home className="size-6 text-orange-600 mr-2" />
                <h2 className="text-xl font-semibold">Energi Rumah</h2>
              </div>
              <label className="block mb-3">
                Listrik (kWh/tahun):
                <input
                  type="number"
                  value={energy.electricity}
                  onChange={(e) => setEnergy({ ...energy, electricity: Number(e.target.value) })}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </label>
              <label className="block">
                Gas alam (m³/tahun):
                <input
                  type="number"
                  value={energy.gas}
                  onChange={(e) => setEnergy({ ...energy, gas: Number(e.target.value) })}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </label>
            </section>

            {/* Diet */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Utensils className="size-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold">Pola Makan</h2>
              </div>
              <label className="block">
                Konsumsi daging:
                <select
                  value={diet.meat}
                  onChange={(e) => setDiet({ ...diet, meat: e.target.value })}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                >
                  <option value="high">Tinggi</option>
                  <option value="moderate">Sedang</option>
                  <option value="low">Rendah</option>
                </select>
              </label>
            </section>
          </motion.div>

          {/* Result Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Hasil Perhitungan</h2>
                <p className="text-4xl font-bold text-emerald-600">{total} kg CO₂ / tahun</p>
                <p className="text-gray-600 mt-2">
                  Perkiraan ini hanya simulasi sederhana.
                </p>
              </div>

              {/* Tips */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                <div className="flex items-center mb-3">
                  <Lightbulb className="size-6 text-yellow-500 mr-2" />
                  <h3 className="font-semibold">Tips Mengurangi Jejak Karbon</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Gunakan transportasi umum atau bersepeda.</li>
                  <li>Matikan lampu saat tidak digunakan.</li>
                  <li>Kurangi konsumsi daging merah.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
