import StyleProvider from '@contexts/StyleProvider';

function MyApp({ Component, pageProps }) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default MyApp;
