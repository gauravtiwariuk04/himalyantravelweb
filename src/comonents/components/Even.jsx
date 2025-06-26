import React from 'react';

const Even = () => {
  const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-4"> Even Numbers</h2>
      <div className="flex flex-wrap gap-4 text-center ms-72" >
        {numbers.map((num) => (
          <div
            key={num}
            className={`w-12 h-12 flex items-center justify-center rounded-md border-2 
                        ${num % 4 === 0 
                          ? 'text-red-500 font-bold border-red-500 bg-red-100' 
                          : 'text-black font-normal border-gray-300 bg-gray-100'}`}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Even;