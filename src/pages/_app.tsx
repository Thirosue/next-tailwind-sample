import { useEffect, useRef } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/tailwind.css';
import 'focus-visible';

interface AppProps {
  Component: any;
  pageProps: any;
  router: any;
}

const usePrevious = (value: any) => {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const App = ({ Component, pageProps, router }: AppProps) => {
  const previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;