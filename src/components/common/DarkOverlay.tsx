const DarkOverlay = () => {
  return (
    <>
      <div className='absolute left-0 inset-y-0 w-1/4 bg-linear-to-r from-black to-transparent' />
      <div className='absolute inset-0 bg-linear-to-t from-black to-transparent from-5%' />
    </>
  );
};

export default DarkOverlay;
