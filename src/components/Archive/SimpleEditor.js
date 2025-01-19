'use client';
import { Sandpack } from '@codesandbox/sandpack-react';
import { bubbleSortExamples } from '../sandpackfiles/bubbleSort';

export default function SimpleEditor() {
  const example1 = bubbleSortExamples.ex_01;
  const call1 = bubbleSortExamples.call_01;

  console.log(example1);

  const filecode = `${example1}
  ${call1}`;

  return (
    <Sandpack
      theme="dark"
      template="vanilla"
      files={{
        '/index.js': {
          code: filecode,
          active: true,
        },
      }}
      options={{
        autorun: true,
        layout: 'console',
        // showNavigator: true,
        // showConsole: true,
        showConsoleButton: true,
        // showTabs: true,
        // closableTabs: true,
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        editorHeight: 280, // default - 300
        editorWidthPercentage: 70, // default - 50
      }}
    />
  );
}
