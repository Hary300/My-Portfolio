const DiagonalLines = () => {
  return (
    <div className='absolute flex gap-4 -left-4 z-1'>
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className='border-l border-neutral-25/10 h-25 w-full -rotate-45'
        />
      ))}
    </div>
  );
};

export default DiagonalLines;
