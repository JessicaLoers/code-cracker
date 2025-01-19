import SimpleEditor from './SimpleEditor';
import { useState } from 'react';

export default function EditorWrapper({ id }) {
  const [code, setCode] = useState(initialCode);

  return (
    <div>
      <SimpleEditor id={id} />
    </div>
  );
}
