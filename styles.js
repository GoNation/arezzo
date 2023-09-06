const styles = {
  SideBySideImage: {
    container:
      'grid grid-cols-1 md:grid-cols-2 gap-0 md:py-30 p-0 bg-tertiary md:gap-8 md:p-8',
  },
  ContentComponent: {
    container:
      'bg-background flex flex-col items-center justify-center py-23 px-8',
    title: 'text-primary font-display text-4xl md:text-5xl font-bold uppercase',
    subtitle: 'text-primary font-display text-2xl uppercase',
    bodyContainer: 'font-bold my-2 mb-4 text-center',
  },
  CTA: {
    baseStyle:
      'text-lg px-12 py-4 transition-all duration-1000 uppercase font-body',
    primaryFilledStyle:
      'bg-primary text-white border-2 border-light hover:text-primary  hover:text-white',
    tertiaryStyle:
      'bg-tertiary text-primary border-2 border-secondary text-dark hover:bg-secondary  hover:text-dark px-8 py-2',
    defaultStyle:
      'bg-tertiary text-primary border-4 border-primary font-bold text-dark hover:bg-primary  hover:text-tertiary ease-in-out duration-500 ',
  },
  ImageComponent: {
    container: '',
    relativeContainer: 'relative h-full w-full pb-100%',
    image: 'absolute top-0 left-0 w-full h-full object-cover',
  },
};

export default styles;
