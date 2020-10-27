// Import types
import type { AppProps } from 'next/app';


// Import Global Styling
import '../styles/global.css';

// Import tailwind
import '../styles/tailwind.css';


// Export App
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }