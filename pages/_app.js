import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import awsconfig from '../src/aws-exports';
// import "@fontsource/inter/variable.css";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp