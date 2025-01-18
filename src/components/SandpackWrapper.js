'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import { gruvboxLight } from '@codesandbox/sandpack-themes';

import {
  helloWorld,
  greetUser,
  sumTwoNumbers,
  functionToString,
} from '../sandpackfiles/examplefunctions';

export default function SandpackWrapper({ selectedFunction = 'greetUser' }) {
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
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        editorHeight: 280,
        editorWidthPercentage: 60,
      }}
    />
  );
}
