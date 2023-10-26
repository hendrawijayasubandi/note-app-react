import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <div className="empty-message-container">
                    <p>Tidak ada catatan</p>
                </div>
            ) : (
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={() => onArchive(note.id)}
                        {...note}
                    />
                ))
            )}
        </div>
    );
}

export default NoteList;