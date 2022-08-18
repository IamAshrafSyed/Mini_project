import Head from "next/head";
import Signin from "./signin";

export default function Home() {
	return (
		<div className="bg-white">
			<Head>
				<title>Smart Tender</title>
			</Head>

			<main>
				<Signin />
			</main>
		</div>
	);
}
