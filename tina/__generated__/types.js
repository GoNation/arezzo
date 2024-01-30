export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const ThemePartsFragmentDoc = gql`
    fragment ThemeParts on Theme {
  Button {
    __typename
    fontWeight
    textTransform
    variants {
      __typename
      variantName
      bg
      color
      borderColor
    }
  }
  colors {
    __typename
    colorName
    shade50
    shade900
  }
  typography {
    __typename
    fontFamily
  }
}
    `;
export const SiteConfigPartsFragmentDoc = gql`
    fragment SiteConfigParts on SiteConfig {
  businessId
  poweredId
  routes {
    __typename
    name
  }
}
    `;
export const PageLayoutsPartsFragmentDoc = gql`
    fragment PageLayoutsParts on PageLayouts {
  components {
    __typename
    ... on PageLayoutsComponentsHero {
      storyName
      showLogo
      shouldShowPhoneAndDirections
    }
    ... on PageLayoutsComponentsSideBySide {
      storyName
      reversed
    }
    ... on PageLayoutsComponentsExpandableShout {
      backgroundImage
      customBackground
      backgroundColor
    }
    ... on PageLayoutsComponentsLargeContentContainer {
      storyName
      position
      backgroundColor
    }
  }
}
    `;
export const ThemeDocument = gql`
    query theme($relativePath: String!) {
  theme(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ThemeParts
  }
}
    ${ThemePartsFragmentDoc}`;
export const ThemeConnectionDocument = gql`
    query themeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ThemeFilter) {
  themeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ThemeParts
      }
    }
  }
}
    ${ThemePartsFragmentDoc}`;
export const SiteConfigDocument = gql`
    query siteConfig($relativePath: String!) {
  siteConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteConfigParts
  }
}
    ${SiteConfigPartsFragmentDoc}`;
export const SiteConfigConnectionDocument = gql`
    query siteConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteConfigFilter) {
  siteConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteConfigParts
      }
    }
  }
}
    ${SiteConfigPartsFragmentDoc}`;
export const PageLayoutsDocument = gql`
    query pageLayouts($relativePath: String!) {
  pageLayouts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageLayoutsParts
  }
}
    ${PageLayoutsPartsFragmentDoc}`;
export const PageLayoutsConnectionDocument = gql`
    query pageLayoutsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageLayoutsFilter) {
  pageLayoutsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageLayoutsParts
      }
    }
  }
}
    ${PageLayoutsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    theme(variables, options) {
      return requester(ThemeDocument, variables, options);
    },
    themeConnection(variables, options) {
      return requester(ThemeConnectionDocument, variables, options);
    },
    siteConfig(variables, options) {
      return requester(SiteConfigDocument, variables, options);
    },
    siteConfigConnection(variables, options) {
      return requester(SiteConfigConnectionDocument, variables, options);
    },
    pageLayouts(variables, options) {
      return requester(PageLayoutsDocument, variables, options);
    },
    pageLayoutsConnection(variables, options) {
      return requester(PageLayoutsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client, options) => {
  const requester = async (doc, vars, options2) => {
    let url = client.apiUrl;
    if (options2?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options2.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client, options) => {
  const requester = generateRequester(client, options);
  return getSdk(requester);
};
