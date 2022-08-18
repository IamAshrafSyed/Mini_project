import Router, { useRouter } from "next/router";
import { useAuth } from "../contexts/UserAuthContexts";

export default function Navbar() {
	const { user, logout } = useAuth();
	const router = useRouter();
	const handleClick = async () => {
		await logout();
		router.push("/signin");
	};
	return (
		<div>
			<nav className="flex items-center justify-between flex-wrap bg-orange-500 p-3">
				<div className="flex items-center flex-shrink-0 text-black mr-6">
					<div className="font-bold text-xl  ">
						<h1>Smart Tender</h1>
					</div>
					<div className="justify-end">
						{user && (
							<button
								onClick={handleClick}
								className="px-6 py-2 mt-2 ml-96  text-white bg-blue-600 rounded-lg hover:bg-blue-900"
							>
								Logout
							</button>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
}
