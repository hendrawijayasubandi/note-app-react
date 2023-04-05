import React from 'react';
import NoteInput from './NoteInput';

function NoteHeader({ search, setQuery }) {
    return (
        <div className="note-app__header">
            <h1>Aplikasi Catatan</h1>
            <div class="note-search">
                <NoteInput type="search" placeholder="Cari catatan ..." value={search} onChange={setQuery} />
            </div>
        </div>
    );
}

export default NoteHeader;