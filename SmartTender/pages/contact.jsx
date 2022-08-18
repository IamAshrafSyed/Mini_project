import React from "react";
import Sidenav from "../components/sidenav";

export default function contact() {
	return (
		<>
			<Sidenav />
			<div className="container pl-96">
				<h3>Contact page content</h3>
				<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
					<form>
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInput7"
								placeholder="Name"
							/>
						</div>
						<div className="form-group mb-6">
							<input
								type="email"
								className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInput8"
								placeholder="Email address"
							/>
						</div>
						<div className="form-group mb-6">
							<textarea
								className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
								id="exampleFormControlTextarea13"
								rows="3"
								placeholder="Message"
							></textarea>
						</div>

						<button
							type="submit"
							className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
						>
							Send
						</button>
					</form>
				</div>
			</div>
			<p className="text-xl font-light pl-52 pr-40 leading-relaxed mt-6 mb-4 text-gray-800">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
				iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
				provident error molestiae vitae corporis in vero est! Beatae, ipsum
				voluptatibus.
			</p>
		</>
	);
}
