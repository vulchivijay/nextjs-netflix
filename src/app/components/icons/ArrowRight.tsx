import React from 'react';

export default function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={props.width ?? 24} height={props.height ?? 24} data-icon="ChevronRightMedium"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img" {...props}>
      <path fill="white" fillRule="evenodd" d="m15.59 12-7.3 7.3 1.42 1.4 8-8a1 1 0 0 0 0-1.4l-8-8-1.42 1.4z" clipRule="evenodd"></path>
    </svg>
  );
}
