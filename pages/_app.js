import GoNationPopup from 'components/GoNationPopup';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoNationPopup />
    </>
  );
}

export default MyApp;
