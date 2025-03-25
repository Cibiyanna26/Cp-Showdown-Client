const Loader = () =>{
    return (
      <>
        <button
          className="buttonload bg-primary p-2 rounded-xl text-white shadow-md hover:opacity-90 duration-200 ease-in-out"
          aria-label="loading"
        >
          <i className="fa fa-circle-o-notch fa-spin"></i>
        </button>
      </>
    );
}

export default Loader;