const GreenOverlay = () => {
  return (
    <>
      <div className='absolute inset-y-0 right-0 w-[48%] bg-primary-200 opacity-80 mix-blend-multiply' />
      <div className='absolute inset-y-0 right-0 w-[48%] bg-primary-200/75 brightness-60 -z-1' />
    </>
  );
};

export default GreenOverlay;
