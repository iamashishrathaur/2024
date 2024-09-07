import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';



const BottomSheet = ({ show, onClose }) => {
  // Handle overflow of the body when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up when unmounting or closing modal
    };
  }, [show]);

  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
    className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[99999]"
    onClick={handleOutsideClick}
  >
    <div
      className={`bg-white rounded-t-2xl transform transition-all duration-[1500ms] ease-in-out w-full md:max-w-[480px] border-t flex flex-col justify-between ${
        show ? 'h-1/2' : 'h-0'
      } self-end`}
      onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
    >
      <div className='w-full h-[60px] flex justify-end items-center'>
         <CgClose color='rgb(255, 85, 0)' size={'25px'} className='mr-5 cursor-pointer' onClick={onClose}/>
      </div>

      <div className='w-full px-5 pb-5'>
      <button style={{ background: 'linear-gradient(135deg, #f50, #fa0)'}}
                    className='h-10 w-full text-white rounded-full shadow-md z-[99] p-[0px_15px_0px_15px] text-[18px] font-semibold flex justify-center items-center gap-2' onClick={()=>{}}>
                    Invest Now <strong>₹120</strong>
       </button>
      </div>
    </div>
  </div>


  );
};

export default BottomSheet;
