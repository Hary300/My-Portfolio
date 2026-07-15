const GreenOverlay = () => {
  return (
    <>
      <div className='absolute inset-y-0 right-0 w-[48%] bg-primary-200  mix-blend-multiply' />
      <div className='absolute inset-y-0 right-0 w-[48%] bg-primary-200/40 brightness-90 -z-1' />
    </>
  );
};

export default GreenOverlay;
