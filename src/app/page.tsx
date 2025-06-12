export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
      className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100"
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Norberto D&apos;Abreu
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          textAlign: "center",
          color: "#666",
        }}
        className="text-xl text-center text-gray-600"
      >
        Portfolio website coming soon
      </p>

      {/* Test if Tailwind is working */}
      <div className="mt-8 p-4 bg-blue-500 text-white rounded-lg">
        <p>If this box is blue, Tailwind is working!</p>
      </div>
    </div>
  )
}
