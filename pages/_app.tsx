import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Component {...pageProps} />
    </div>
  );
}
