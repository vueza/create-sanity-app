import type { PlopTypes } from "@turbo/gen";

interface ComponentData {
  name: string;
  createStory: boolean;
  createSchema: boolean;
  createFragment: boolean;
}

const skipStory = (data: ComponentData) => {
  if (data.createStory === false) {
    return "Skip this step as createStory is set to false.";
  }

  return true;
};

const skipSchema = (data: ComponentData) => {
  if (data.createSchema === false) {
    return "Skip this step as createSchema is set to false.";
  }

  return true;
};

const skipFragment = (data: ComponentData) => {
  if (data.createFragment === false) {
    return "Skip this step as createFragment is set to false.";
  }

  return true;
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Adds a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
        validate: (value: string) =>
          value ? true : "Component name is required",
      },
      {
        message: "Do you want to create a Storybook story?",
        type: "confirm",
        name: "createStory",
      },
      {
        message: "Do you want to create a Sanity object?",
        type: "confirm",
        name: "createSchema",
      },
      {
        message: "Do you want to create a Groq fragment?",
        type: "confirm",
        name: "createFragment",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/ui/src/components/{{ kebabCase name }}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "apps/docs/src/{{ kebabCase name }}.stories.tsx",
        templateFile: "templates/story.hbs",
        skip: skipStory,
      },
      {
        type: "add",
        path: "apps/cms/src/objects/{{ kebabCase name }}.ts",
        templateFile: "templates/object.hbs",
        skip: skipSchema,
      },
      {
        type: "modify",
        path: "apps/cms/src/types.ts",
        template:
          'import { {{ camelCase name }} } from "./objects/{{ kebabCase name }}";\n' /* editorconfig-checker-disable-line */,
        pattern: /(^)/g,
        skip: skipSchema,
      },
      {
        type: "append",
        path: "apps/cms/src/types.ts",
        pattern: /const objects: SchemaTypeDefinition\[\] = \[/g,
        template: "  {{ camelCase name }},",
        skip: skipSchema,
      },
      {
        type: "add",
        path: "apps/cms/src/fragments/{{ kebabCase name }}.ts",
        templateFile: "templates/fragment.hbs",
        skip: skipFragment,
      },
    ],
  });
}
