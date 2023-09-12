import buildCover from 'helpers/general/buildCover';

const homepageLayout = [
  {
    type: 'Hero',
    storyName: 'Homepage hero',
    showLogo: false,
    shouldShowPhoneAndDirections: true,
  },
  {
    type: 'ExpandableShout',
    isExpandable: false,
    bgFunction: buildCover, // Assuming you need the cover for every ExpandableShout
  },
  {
    type: 'SideBySideImage',
    storyName: 'Homepage story 4',
    config: null,
  },

  {
    type: 'LargeContentContainer',
    storyName: 'Homepage story 3',
  },
  {
    type: 'SideBySideImage',
    storyName: 'Homepage story 5',
    config: null,
  },

  {
    type: 'LargeContentContainer',
    storyName: 'Homepage story 2',
  },
  // ... continue for other components
];

export { homepageLayout };
