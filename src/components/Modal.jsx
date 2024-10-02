/* eslint-disable react/prop-types */


const Modal = ({ open, onClose, children }) => {
  return (
    <div 
    onClick={(e) => e.stopPropagation()}
    className={`flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      {children}
    </div>  
  )
}

export default Modal
