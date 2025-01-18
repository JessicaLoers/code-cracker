import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
} from '@codesandbox/sandpack-react';
import { gruvboxLight } from '@codesandbox/sandpack-themes';

export default function SandpackWrapper({ code, template = 'vanilla' }) {
  return (
    <SandpackProvider
      options={{ showLineNumbers: true, wrapContent: true, autorun: false, autoReload: false }}
      template={template}
      theme={gruvboxLight}
      files={{
        '/index.js': {
          code,
          active: true,
        },
      }}>
      <SandpackLayout>
        {/* Code Editor */}
        <SandpackCodeEditor />
        {/* Console */}
        <SandpackConsole
          showHeader={true} // Zeigt den Header der Console
          resetOnPreviewRestart={true} // Löscht die Logs bei Neustart
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
