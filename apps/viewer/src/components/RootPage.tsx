export const RootPage = ({ dashboardUrl }: { dashboardUrl: string }) => (
  <div
    style={{
      height: "100dvh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <div>
      <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
        Welcome to BharatFlow AI
      </h1>
      <p>
        BharatFlow AI helps teams launch governed customer workflows across
        WhatsApp, web, and business systems.
      </p>
      <p>
        Go to the <a href={dashboardUrl}>dashboard</a>.
      </p>
    </div>
  </div>
);
