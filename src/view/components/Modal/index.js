const Modal = ({ visible, setVisible, title, onClick, footer, children }) => {
  return visible === true ? (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={() => setVisible(false)}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white text-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-center px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col mt-3 text-center justify-center w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
              {children}
            </div>
          </div>
          <div className="flex items-center w-full justify-center bg-gray-200">
            {footer}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
