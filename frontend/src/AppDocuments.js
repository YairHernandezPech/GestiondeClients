import React, { Fragment, useEffect, useState } from 'react';
import NavbarDocuments from "./ComponetsAdmin/documents/navDocuments";
import Documentlist from "./ComponetsAdmin/documents/table";

const AppDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [listupdateNote, setListupdateNote] = useState(false);
  const [noteValues, setNoteValues] = useState({});

  useEffect(() => {
    const getDocuments = () => {
      fetch('http://localhost:3001/documents')
        .then(res => res.json())
        .then(res => setDocuments(res));
    };

    getDocuments();
  }, [listupdateNote]);

  const handleListUpdate = () => {
    setListupdateNote(prevState => !prevState);
  };

  return (
    <Fragment>
      <NavbarDocuments brand="Documentos" setListupdateNote={handleListUpdate} />
      <div className='container'>
        <div className='row'>
          <div className='col-14'>
            <br />
            <Documentlist documents={documents} setListupdateNote={handleListUpdate} noteValues={noteValues} setNoteValues={setNoteValues} listupdateNote={listupdateNote} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppDocuments;
