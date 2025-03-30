import { Children } from "react";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="app">
      <header className="header">
        <h1>Søk-o-rama</h1>
      </header>
      <div className="info-box">
        <p>
          Her kan du søke i transkriberte episoder av radioresepsjonen.
          Transkriptene er laget med{" "}
          <a
            href="https://github.com/openai/whisper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whisper
          </a>{" "}
          fra OpenAi, og er ikke perfekte.
        </p>
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
