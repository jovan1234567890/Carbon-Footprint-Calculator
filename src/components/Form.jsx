import React from 'react';

const Biodata = () => {
const birthYear = 2005; 
const currentYear = 2024; 
const age = currentYear - birthYear; 

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<div className="bg-white shadow-md rounded-lg p-6 max-w-md">
        <h2 className="text-2xl font-bold text-center mt-4">Jovandya Ardhika</h2>
        <p className="text-gray-600 text-center">Mahasiswa Universitas Dian Nuswantoro</p>
        <div className="mt-4 text-center">
<p className="text-lg font-semibold">Tahun Lahir: {birthYear}</p>
<p className="text-lg font-semibold">Umur Anda: {age} tahun</p>
        </div>
</div>
    </div>
);
};

export default Biodata;