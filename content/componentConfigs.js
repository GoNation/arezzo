const sideBySideConfig = {
  templateKey: 'sidebysideimage',
  title: 'SideBySideVariation1',
  sideBySideImageContainerStyle:
    'grid grid-cols-1 md:grid-cols-2 gap-0 md:py-30 p-0 bg-tertiary md:gap-8 md:py-4 md:px-4',
  reversed: true,
  ctaConfig: {
    baseStyle:
      'text-lg px-12 py-4 transition-all duration-1000 uppercase font-body',
    primaryFilledStyle:
      'bg-primary text-white border-2 border-light hover:text-primary  hover:text-white',
    tertiaryStyle:
      'bg-tertiary text-primary border-2 border-secondary text-dark hover:bg-secondary  hover:text-dark px-8 py-2',
    defaultStyle:
      'bg-tertiary text-primary border-4 border-primary font-bold text-dark hover:bg-primary  hover:text-tertiary ease-in-out duration-500',
  },
  contentConfig: {
    containerStyle:
      'bg-background flex flex-col items-center justify-center py-24 px-8',
    titleStyle:
      'text-primary font-display text-4xl md:text-4xl xl:text-5xl font-bold uppercase',
    subtitleStyle:
      'text-secondary font-display text-3xl md:text-4xl uppercase my-2',
    bodyContainerStyle: 'font-bold my-2 mb-4 text-center',
  },
  imageConfig: {
    containerStyle: 'h-96',
    relativeContainerStyle: 'relative h-full w-full pb-100%',
    imageStyle: 'absolute top-0 left-0 w-full h-full object-cover',
  },
};

export { sideBySideConfig };
