import './Footer.style.css'

function Footer() {
  return (
    <div>
      <div className="footer">
        <p className="list">
          <a
            href="https://github.com/emepuchades/frontend-femhack"
            target="_blank"
            rel="noreferrer"
          >
            Repo Github
          </a>
        </p>
        <p className="list">
          <a
            href="mailto:mariapuchadesortega@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
        <p className="list">
          <a>FEMHACK</a>
        </p>
        <p className="list">👋</p>
      </div>
    </div>
  );
}

export default Footer