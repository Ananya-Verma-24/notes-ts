import "./Header.css";
import  "boxicons";

export function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <div>
            <box-icon name='edit' size="30px" color="#646cff" animation='tada' ></box-icon>
            <a className="appName" href="/">NoteWorthy</a>
            </div>
          
        </div>

        <div>
          <a href="/">Decks</a>
        </div>

      </div>
    </div>
  );
}
