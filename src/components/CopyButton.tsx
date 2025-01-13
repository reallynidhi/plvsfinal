'use client';

import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons';

const CopyCode = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <button
      type="button"
      className="absolute h-full flex -mt-2 items-center right-2 top-2 text-xs text-gray-500"
      onClick={() => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 5000);
      }}
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
};

export default CopyCode;
