import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';
import NoteHeader from './NoteHeader';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                    }
                ]
            }
        })
    }
    render() {
        return (
            <div className="note-item__header">
                <h1>Aplikasi Catatan</h1>
                <div class="note-search">
                    <input type="text" placeholder="Cari catatan ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                </div>
                <h2>Buat Catatan</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
                <h2>Arsip</h2>
            </div>
        );
    }
}

export default NoteApp;