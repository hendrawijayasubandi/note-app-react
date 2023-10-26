import React from 'react';

function ArchiveButton({ id, onArchiveHandler, archived }) {
    return (
        <button className='note-item__archive-button' onClick={() => onArchiveHandler(id)}>
            {archived ? "Pindahkan" : "Arsipkan"}
        </button>
    );
}

export default ArchiveButton;