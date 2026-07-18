const Logo = () => {
  return (
    <a
      href={'#home'}
      className='flex items-center gap-2.25 cursor-pointer group'
    >
      <div className='border-t-2 w-6 border-white' />
      <span className='font-bold text-md lg:text-xl text-primary-200 group-hover:underline'>
        Hary300
      </span>
    </a>
  );
};

export default Logo;
