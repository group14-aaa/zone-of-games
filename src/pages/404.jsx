const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold text-red-500 mb-4'>404 Error</h1>
            <p className='text-lg text-text mb-8'>This page doesn't exist!</p>
        </div>
    );
}

export default ErrorPage;
