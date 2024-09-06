import { useState } from 'react';

const BottomSheet = ({ show, onClose}) => {
  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="bottom-dialog fixed top-0 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[99999]"
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-white p-6 rounded-t-lg transform transition-all duration-[1500ms] ease-in-out w-full md:max-w-[480px] border-t ${
          show ? 'h-1/2' : ' h-0'
        } self-end`}
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        
      </div>
    </div>
  );
};

export default BottomSheet;
