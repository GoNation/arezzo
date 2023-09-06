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
    type: 'LargeContentContainer',
    storyName: 'Homepage story 2',
  },
  {
    type: 'StorySection',
    storiesConfig: [
      {
        storyName: 'Homepage story 4',
        config: null, // will get this dynamically
      },
    ],
  },
  {
    type: 'LargeContentContainer',
    storyName: 'Homepage story 3',
  },
  {
    type: 'StorySection',
    storiesConfig: [
      {
        storyName: 'Homepage story 5',
        config: null, // will get this dynamically
      },
    ],
  },
  // ... continue for other components
];

export { homepageLayout };
