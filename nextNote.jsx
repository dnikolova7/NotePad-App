import React from "react";
import Note from "./Note";
import notes from "./Notes";

const nextNote = notes.map(function comeOn(plusNote){
return <Note
id = {plusNote.key}
name = {plusNote.title}
description = {plusNote.content}
/>
});

export default nextNote;
