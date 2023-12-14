import TickIcon from '@public/assets/icons/tickIcon'

const Toast = ({
    type,
    message,
    onClose,
}) => {
  return (
    <div 
        id="toast-success" 
        class="flex absolute top-20 right-16 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-transform
        'transform translate-y-30 opacity-100" 
        role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <TickIcon/>
        </div>
        <div class="ms-3 text-sm font-normal">{message}.</div>
        <button 
            onClick={onClose}
            type="button" 
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" 
            data-dismiss-target="#toast-success" 
            aria-label="Close">
            <svg 
                class="w-3 h-3" 
                ariaHidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 14 14"
            >
                <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
            </svg>
        </button>
    </div>
  )
}

export default Toast