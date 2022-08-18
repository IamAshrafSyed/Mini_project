import React from "react";
import useState from "react";
import Sidenav from "../components/sidenav";

export default function Quote() {
	const namesArray = new Array();
	const numsArray = new Array();
	var name;
	var num;

	function handlename() {
		name = prompt("Enter your Organisation Name");
		namesArray.push(name);
		console.log(namesArray);
	}
	function handlenumber() {
		num = prompt("Enter your quote value");
		numsArray.push(num);
		console.log(numsArray);
	}
	function handleeval() {
		var a = numsArray[0];
		var b = 0;
		var c;
		for (let i = 0; i < numsArray.length; i++) {
			if (a > numsArray[i]) {
				a = numsArray[i];
				b = i;
			}
		}
		c = namesArray[b];
		console.log(a);
		console.log(c);
		alert(
			"The organisation " +
				c +
				" Quoted the amount $ " +
				a +
				" Got the tender 🎉"
		);
	}

	return (
		<>
			<Sidenav />

			<div className="pl-52 pr-52">
				<h2 className="text-lg text-green-600">
					Enter your quote for the tender below Now!!!!
				</h2>
				{/* <form>
					<div className="mb-6">
						<label className="block mb-2 text-lg font-medium text-gray-900">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 required"
							placeholder="Organisation Name"
							required=""
							onClick={handlename}
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-lg font-medium text-gray-900">
							Quote
						</label>
						<input
							type="text"
							id="number"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 required"
							placeholder=" Enter amount"
							required=""
							onClick={handlenumber}
						/>
					</div>

					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
				</form> */}
				<button
					className="text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-400"
					onClick={handlename}
				>
					Name
				</button>
				<br />
				<br />
				<button
					className="text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-400"
					onClick={handlenumber}
				>
					Value
				</button>
			</div>

			<div className="pl-96">
				<button
					className="text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-400"
					onClick={handleeval}
				>
					Evaluate
				</button>
			</div>
			<p className="text-xl font-light pl-52 pr-40 leading-relaxed mt-6 mb-4 text-gray-800">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
				iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
				provident error molestiae vitae corporis in vero est! Beatae, ipsum
				voluptatibus.
			</p>

			<p className="text-xl font-light pl-52 pr-40 leading-relaxed mt-6 mb-4 text-gray-800">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
				iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
				provident error molestiae vitae corporis in vero est! Beatae, ipsum
				voluptatibus.
			</p>
		</>
	);
}
