import Link from 'next/link';
const PageHero = props => {
  const { withLogo } = props;
  if (!props?.img?.cloudinaryId) {
    return <div className=""></div>;
  }
  return (
    <div className="">
      <div
        className="page-hero bg-cover flex justify-center items-center relative  p-4 flex-col"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%),
  		url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${props.img.cloudinaryId})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute  left-0 w-full h-1/2 bottom-0 "></div>
        {withLogo && (
          <div className="flex justify-center items-center mb-20">
            <Link href={'/'}>
              <a>
                <img src="/logo.png" className="max-w-[380px] w-full " />
              </a>
            </Link>
          </div>
        )}
        <h1
          className={`relative  text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white   font-light tracking-wide italic flex justify-center items-center  mt-16  text-center ${
            props.pageTitle === 'Weddings'
              ? 'font-wedding italic '
              : 'font-display uppercase'
          }`}
        >
          {props.pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHero;
