import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";

globalStyles(); // Outside function App

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" /> {/* <img src={logoImg.src} alt="" /> */}
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;
