import React from 'react';

function NoteHeader({ title }) {
    return (
        <div className="note-item__header">
            <h1>Aplikasi Catatan</h1>
            <div class="note-search">
                <input type="text" placeholder="Cari catatan ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            </div>
        </div>
    );
}

export default NoteHeader;