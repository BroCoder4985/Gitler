export default function Page() {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🎭 Mafia Game Server</h1>
      <p>Сервер запущен и готов к игре!</p>
      <div style={{ marginTop: "20px" }}>
        <a
          href="/game"
          style={{
            background: "#667eea",
            color: "white",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          🎮 Играть
        </a>
      </div>
    </div>
  )
}
