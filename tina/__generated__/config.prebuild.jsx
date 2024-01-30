// tina/config.js
import { defineConfig } from "tinacms";

// tina/schemas/hero.js
var heroComponent = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      // Default values, modify as needed
      storyName: "Default Story Name",
      showLogo: true,
      shouldShowPhoneAndDirections: true
    }
  },
  fields: [
    {
      type: "string",
      label: "Story Name",
      name: "storyName"
    },
    {
      type: "boolean",
      // Note: changing component to type and using boolean
      label: "Show Logo",
      name: "showLogo"
    },
    {
      type: "boolean",
      label: "Show Phone and Directions",
      name: "shouldShowPhoneAndDirections"
    }
  ]
};
var hero_default = heroComponent;

// tina/schemas/expandableShout.js
var expandableShout = {
  name: "expandableShout",
  label: "Expandable Shout",
  ui: {
    defaultItem: {
      backgroundImage: "Avatar",
      // Default value
      customBackground: "",
      // Empty string by default
      backgroundColor: ""
      // Empty string by default
    }
  },
  fields: [
    {
      component: "select",
      type: "string",
      name: "backgroundImage",
      label: "Background Image",
      description: "Choose the type of background for the Expandable Shout.",
      options: [
        { value: "Avatar", label: "Avatar" },
        { value: "Custom", label: "Custom" },
        { value: "Solid Color", label: "Solid Color" },
        { value: "None", label: "None" }
      ]
    },
    {
      type: "string",
      label: "Custom Background",
      name: "customBackground",
      description: 'Provide a URL if "Custom" is selected for Background Image.'
    },
    {
      type: "string",
      label: "Background Color",
      name: "backgroundColor",
      description: 'Provide a hex (e.g. #FF5733) or rgba (e.g. rgba(255,87,51,1)) value if "Solid Color" is selected for Background Image.'
    }
  ]
};
var expandableShout_default = expandableShout;

// tina/schemas/largeContentContainer.js
var largeContentContainer = {
  name: "largeContentContainer",
  label: "Large Content Container",
  ui: {
    defaultItem: {
      storyName: "Default Story Name",
      position: "top-left",
      backgroundColor: ""
    }
  },
  fields: [
    {
      component: "text",
      type: "string",
      label: "Story Name",
      name: "storyName"
    },
    {
      component: "select",
      type: "string",
      label: "Position",
      name: "position",
      options: [
        { value: "top-left", label: "Top Left" },
        { value: "top-center", label: "Top Center" },
        { value: "top-right", label: "Top Right" },
        { value: "left-center", label: "Left Center" },
        { value: "center", label: "Center" },
        { value: "right-center", label: "Right Center" }
      ]
    },
    {
      component: "text",
      type: "string",
      label: "Background Color",
      name: "backgroundColor",
      hint: "Provide a hex (e.g. #FF5733) or rgba (e.g. rgba(255,87,51,1)) value."
    }
  ]
};
var largeContentContainer_default = largeContentContainer;

// tina/schemas/theme.js
var themeSchema = {
  name: "chakraTheme",
  label: "Chakra Theme",
  fields: [
    {
      name: "Button",
      label: "Button",
      component: "group",
      type: "object",
      fields: [
        {
          type: "string",
          name: "fontWeight",
          label: "Font Weight",
          defaultValue: "bold"
        },
        {
          type: "string",
          name: "textTransform",
          label: "Text Transform",
          defaultValue: "uppercase"
        },
        {
          component: "group-list",
          type: "object",
          name: "variants",
          label: "Button Variants",
          itemProps: (item) => ({
            label: item.variantName
          }),
          defaultItem: () => ({
            variantName: "Default",
            bg: "transparent",
            color: "dark",
            borderColor: "dark"
          }),
          fields: [
            {
              type: "string",
              name: "variantName",
              label: "Variant Name"
            },
            {
              type: "string",
              name: "bg",
              label: "Background Color"
            },
            {
              type: "string",
              name: "color",
              label: "Font Color"
            },
            {
              type: "string",
              name: "borderColor",
              label: "Border Color"
            }
            // ... Any other properties you want to be configurable for each variant
          ]
        }
      ]
    },
    {
      name: "colors",
      label: "Colors",
      component: "group-list",
      type: "object",
      itemProps: (item) => ({
        label: item.colorName
      }),
      defaultItem: () => ({
        colorName: "Primary",
        shade50: "#f7fafc",
        // ... other shades up to 900
        shade900: "#1a202c"
      }),
      fields: [
        {
          type: "string",
          name: "colorName",
          label: "Color Name"
        },
        {
          type: "string",
          name: "shade50",
          label: "Shade 50"
        },
        // ... Fields for other shades up to shade900
        {
          type: "string",
          name: "shade900",
          label: "Shade 900"
        }
      ]
    },
    {
      name: "typography",
      label: "Typography",
      component: "group",
      type: "object",
      fields: [
        {
          type: "string",
          name: "fontFamily",
          label: "Font Family"
        }
        // ... other typography related fields
      ]
    }
    // ... other components can be added in a similar fashion
  ]
};
var theme_default = themeSchema;

// tina/schemas/sideBySide.js
var sideBySide = {
  name: "sideBySide",
  label: "Side By Side",
  ui: {
    defaultItem: {
      storyName: "Default Story Name",
      reversed: false
    }
  },
  fields: [
    {
      type: "string",
      label: "Story Name",
      name: "storyName"
    },
    {
      type: "boolean",
      label: "Reversed Layout",
      name: "reversed"
    }
  ]
};
var sideBySide_default = sideBySide;

// tina/schemas/siteConfig.js
var siteConfigSchema = {
  name: "siteConfig",
  label: "Site Configuration",
  path: "content/config",
  fileName: "siteConfig",
  extension: "json",
  fields: [
    {
      type: "string",
      name: "businessId",
      label: "Business ID"
    },
    {
      type: "string",
      name: "poweredId",
      label: "Powered ID"
    },
    // ... add other fields in a similar manner
    {
      type: "object",
      name: "routes",
      label: "Routes",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name"
        }
        // ... define other properties for routes
      ]
    }
  ]
};
var siteConfig_default = siteConfigSchema;

// tina/config.js
import json from "content/test.json";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        label: "Chakra Theme",
        name: "theme",
        path: "content/theme",
        // you can decide on the path, ensure it exists
        fields: theme_default.fields,
        format: "json",
        // I'm assuming you want to save the theme as a JSON
        create: true,
        // Allows creating the theme from the CMS if it doesn't exist
        extension: "json"
        // Ensure the file is saved as a JSON file
      },
      siteConfig_default,
      {
        name: "pageLayouts",
        label: "Page Layouts",
        path: "content/layouts",
        fields: [
          {
            type: "object",
            list: true,
            name: "components",
            label: "Components",
            templates: [
              hero_default,
              sideBySide_default,
              expandableShout_default,
              largeContentContainer_default
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
