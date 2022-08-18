import React from "react";
import Link from "next/link";

function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button className="text-sm font-semibold" onClick={handleClick}>
				DELETE
			</button>
			<Link href="/quote">
				<a className=" text-yellow-500 text-lg">Send Quote</a>
			</Link>
		</div>
	);
}

export default Note;
