import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const OuterContainer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

const InnerContainer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
);

const ContainerWithExport = {
  ...Container,
  Inner: InnerContainer,
  Outer: OuterContainer,
} as typeof Container & {
  Inner: typeof InnerContainer;
  Outer: typeof OuterContainer;
}

export { ContainerWithExport as Container };