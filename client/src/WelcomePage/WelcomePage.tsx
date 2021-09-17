import React, { useRef, useState } from "react";
import "./WelcomePage.css";
import { v4 as uuidV4 } from "uuid";
import { useHistory } from "react-router-dom";
export default function WelcomePage() {
  const [error, seterror] = useState(false);
  const history = useHistory();
  const documentID = useRef<HTMLInputElement>(null);
  const newDocumentHandler = () => {
    history.push(`/documents/${uuidV4()}`);
  };

  const openDocumentHandler = () => {
    if (documentID.current?.value != "") {
      history.push(`/documents/${documentID.current?.value}`);
      seterror(false);
    } else {
      seterror(true);
    }
  };

  const onFocusHandle = () => {
    seterror(false);
  };
  return (
    <div className="container">
   
          <div className="header">
            <h3>Google Docs Replica</h3>
          </div>
          <div className="btn-group">
            <button className="button" onClick={newDocumentHandler}>
              New Document
            </button>
          </div>
          <div>           
            <div className="btn-group">
            <input
              className={error ? "input-error" : "input"}
              type="text"
              onFocus={onFocusHandle}
              placeholder="Enter Document ID"
              ref={documentID}
            ></input>
              <button className="button" onClick={openDocumentHandler}>
                Open Document
              </button>
            </div>
            <div className="footer">
              <h5>
                *If the ID entered is not valid then a new document with the
                entered ID will be opened for you
              </h5>
            </div>
    </div>
    </div>
  );
}
