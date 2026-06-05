import "../App.css";

function MsgCard({ text, type, loading }) {
  return (
    <div className={`chat-message ${type}`}>
      <div className="bubble">
        {loading && type === "model" ? (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
}

export default MsgCard;