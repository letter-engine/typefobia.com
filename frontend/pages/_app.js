import '../styles/reset.css';
import '../styles/globals.css';
// Components
import ModalContextProvider from '../store/modal-context';
import AppContainer from '../components/Containers/AppContainer';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import Donar from '../components/Overlay/Donar';
import MailChimp from '../components/Overlay/MailChimp';

export default function MyApp({ Component, pageProps }) {
    return (
        <ModalContextProvider>
            <AppContainer>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </AppContainer>
            <MailChimp />
            <Donar />
        </ModalContextProvider>
    );
}
