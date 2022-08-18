import "../styles/globals.css";
import Navbar from "../components/navbar";

import { UserAuthContextProvider } from "../contexts/UserAuthContexts";

function MyApp({ Component, pageProps }) {
	return (
		<UserAuthContextProvider>
			<Navbar />
			<div>
				<Component {...pageProps} />
			</div>
		</UserAuthContextProvider>
	);
}

export default MyApp;
