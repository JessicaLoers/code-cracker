'use client';

import { gruvboxLight } from '@codesandbox/sandpack-themes';
// import { sandpackDark } from '@codesandbox/sandpack-themes';
import { useState } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import styles from './styles/Editor.module.css';

export default function CodeEditor({ code = `console.log('Hello, World!');` }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className={styles.toggleButton}
        onClick={() => setIsVisible(!isVisible)}
        aria-label={isVisible ? 'Hide Editor' : 'Show Editor'}>
        🥠
      </button>

      {/* Editor and Console */}
      {isVisible && (
        <div className={styles.editorContainer}>
          <Sandpack
            theme={gruvboxLight}
            template="vanilla"
            files={{
              '/index.js': {
                code,
                active: true,
              },
            }}
            options={{
              autorun: true, // Code wird automatisch ausgeführt
              layout: 'console', // Zeigt Editor und Konsole
              showConsoleButton: true, // Zeigt den Run-Button
              showLineNumbers: true, // Zeigt Zeilennummern im Editor
              editorHeight: 300, // Höhe des Editors
              editorWidthPercentage: 70, // Breite des Editors relativ zur Gesamtbreite
            }}
          />
        </div>
      )}
    </>
  );
}
