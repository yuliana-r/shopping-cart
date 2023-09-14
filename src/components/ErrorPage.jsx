import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-4 m-auto text-2xl font-semibold bg-silver-100 font-display text-silver-900'>
      <h1>Oh no, this page doesn&apos;t exist <i className="text-yellow-500 fa-solid fa-heart-crack"></i></h1>
      <p>You can go back to the home page by clicking <Link to="/" className='font-bold underline text-navy-700'>here</Link>, though!</p>
    </div>
  );
};

export default ErrorPage;