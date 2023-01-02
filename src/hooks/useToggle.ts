import { useState } from 'react';

export default function useToggle(defaultValue: unknown) {
  const [value, setValue] = useState(defaultValue);

  function toggle(value: unknown): void {
    setValue((currentValue: boolean) => {
      typeof value === 'boolean' ? value : !currentValue;
    });
  }

  return [value, toggle];
}
