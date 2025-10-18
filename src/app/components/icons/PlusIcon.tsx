import React from 'react';

export default function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 36" width={props.width ?? 36} height={props.height ?? 36} data-icon="PlusLarge" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img" {...props}>
      <path fill="white" fillRule="evenodd" d="M17 17V3h2v14h14v2H19v14h-2V19H3v-2z" clipRule="evenodd"></path>
    </svg>
  );
}
