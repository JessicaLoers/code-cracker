'use client';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
  Sandpack,
} from '@codesandbox/sandpack-react';
import { gruvboxLight } from '@codesandbox/sandpack-themes';

import {
  helloWorld,
  greetUser,
  sumTwoNumbers,
  functionToString,
} from '../sandpackfiles/examplefunctions';

export default function SandpackWrapper({ selectedFunction = 'helloWorld' }) {
  const files = {
    '/index.js': {
      code: functionToString(
        {
          helloWorld,
          greetUser,
          sumTwoNumbers,
        }[selectedFunction]
      ),
      active: true,
    },
  };

  return (
    <Sandpack
      template="vanilla"
      theme={gruvboxLight}
      files={files}
      options={{
        autorun: false,
        autoReload: false,
        layout: 'console',
        showTabs: true,
        closableTabs: true,
        showLineNumbers: true, // default - true
        showInlineErrors: true, // default - false
        wrapContent: true, // default - false
        editorHeight: 280, // default - 300
        editorWidthPercentage: 60, // default - 50
      }}
    />
  );
}
