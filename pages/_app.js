import '../styles/globals.css'
import "react-notion/src/styles.css";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Navigation />
      <Component {...pageProps} />
      </>
  )
}

export default MyApp
