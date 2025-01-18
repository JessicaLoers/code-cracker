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
      template={template}
      theme={gruvboxLight}
      files={{
        '/index.js': {
          code: `console.log('Hello from Sandpack Console!');`,
          active: true,
        },
      }}>
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackConsole showHeader={true} resetOnPreviewRestart={true} standalone />
      </SandpackLayout>
    </SandpackProvider>
  );
}

// Simple
// export default function SandpackWrapper() {
//   return (
//     <Sandpack
//       template="vanilla"
//       options={{
//         showConsole: true, // Zeigt die Konsole direkt unter der Vorschau
//         showConsoleButton: true, // Zeigt einen Button zum Umschalten der Konsole
//       }}
//       files={{
//         '/index.js': {
//           code: `console.log('Hello from Sandpack!');`,
//           active: true,
//         },
//       }}
//     />
//   );
// }
