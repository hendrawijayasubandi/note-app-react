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
            archivedNotes: [],
            search: '',
            filteredNotes: [], // Menambahkan filteredNotes untuk menyimpan catatan yang difilter.
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.setQuery = this.setQuery.bind(this);
        this.setFilteredNotes = this.setFilteredNotes.bind(this); // Menambahkan setFilteredNotes
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const { notes, archivedNotes } = this.state;
        const noteToArchive = notes.find(note => note.id === id);

        if (noteToArchive) {
            this.setState({
                notes: notes.filter(note => note.id !== id),
                archivedNotes: [...archivedNotes, noteToArchive],
            });
        }
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
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }

    setQuery(query) {
        this.setState({ search: query });
    }

    setFilteredNotes(filteredNotes) {
        this.setState({ filteredNotes });
    }

    render() {
        return (
            <div>
                <NoteHeader
                    search={this.state.search}
                    setQuery={this.setQuery}
                    notes={this.state.notes}
                    setFilteredNotes={this.setFilteredNotes} // Mengirimkan setFilteredNotes ke komponen NoteHeader
                />
                <div className="note-app__body">
                    <h2>Catatan Aktif</h2>
                    <NoteList
                        notes={this.state.filteredNotes.length > 0 ? this.state.filteredNotes : this.state.notes}
                        search={this.state.search}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                    <h2>Arsip</h2>
                    <NoteList notes={this.state.archivedNotes} onDelete={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default NoteApp;