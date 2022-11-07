import * as React from 'react';
import { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.MutableRefObject<any>, handler: any): void {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any): void {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props: { handler: Function, children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }): JSX.Element {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handler);

  return <div ref={wrapperRef}>{props.children}</div>;
}