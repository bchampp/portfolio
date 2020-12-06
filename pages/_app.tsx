// Import types
import type { AppProps } from 'next/app';


// Import Global Styling
import '../styles/global.css';

<<<<<<< HEAD
// Import tailwind
import '../styles/tailwind.css';

import '../styles/post.css';
import '../styles/list.css';
=======
>>>>>>> 07b5cd37ded555c82ab84f9f3ca35239b6cea161

// Export App
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }