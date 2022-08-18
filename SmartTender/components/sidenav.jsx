import React from "react";
import Link from "next/link";

export default function Sidenav() {
	return (
		<>
			<div className="w-40 h-full shadow-2xl bg-slate-200 px-1 absolute pl-">
				<ul className="relative">
					<li className="relative pt-2 font-bold py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
						<Link
							className="flex font-mono items-center "
							href="/home "
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							HOME
						</Link>
					</li>
					<li className=" font-mono relative pt-4 font-bold py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
						<Link
							className="flex items-center "
							href="/about"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							About
						</Link>
					</li>
					<li className=" font-mono relative pt-4 font-bold py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
						<Link
							className="flex items-center "
							href="/contact"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
