import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
} from '@codesandbox/sandpack-react';

export default function SandpackWithConsole({ code, template = 'react' }) {
  return (
    <SandpackProvider
      template={template}
      options={{
        showLineNumbers: true,
        wrapContent: true,
        autorun: false,
        autoReload: false,
      }}
      files={{
        '/App.js': {
          code,
          active: true,
        },
      }}>
      <SandpackLayout>
        {/* Code Editor */}
        <SandpackCodeEditor />
        {/* Console */}
        <SandpackConsole />
      </SandpackLayout>
    </SandpackProvider>
  );
}
