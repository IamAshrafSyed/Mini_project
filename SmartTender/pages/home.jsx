import Link from "next/link";
import React, { useState } from "react";
import Sidenav from "../components/sidenav";
import Note from "./Note";
import CreateArea from "./CreateArea";

import { useAuth } from "../contexts/UserAuthContexts";

export default function Home() {
	const { user } = useAuth();
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}
	return (
		<>
			<Sidenav />
			<div className="pl-36">
				<CreateArea onAdd={addNote} />
				{notes.map((noteItem, index) => {
					return (
						<Note
							key={index}
							id={index}
							title={noteItem.title}
							content={noteItem.content}
							onDelete={deleteNote}
						/>
					);
				})}
			</div>
		</>
	);
}
