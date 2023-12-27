import Link from "next/link";

export default function Home() {
  return (
    <main className="container max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold my-8">Nicholas Charriere</h1>
      <p className="max-w-xl">
        Engineer with a passion for creating things. Currently building{" "}
        <a
          className="text-text-700 font-medium underline hover:text-froly-500"
          href="https://axflow.dev"
        >
          Axflow
        </a>{" "}with{" "}
        <a
          className="text-text-700 font-medium underline hover:text-froly-500"
          href="https://benreinhart.com"
        >
          Ben Reinhart
        </a>
        .
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        I recently was a founding engineer at{" "}
        <a
          href="https://privy.io"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          Privy
        </a>
        . Before that I spent 4 years on the ML platform team at{" "}
        <a
          href="https://getcruise.com"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          Cruise
        </a>
        , 2 years at {" "}
        <a
          href="https://pinterest.com"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          Pinterest
        </a> building real-time ML systems, and a few years working full-stack at lesser known startups.
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        I live in California and grew up in France, where I got my
        engineering Masters from <a href="https://en.wikipedia.org/wiki/Mines_Paris_%E2%80%93_PSL" className="text-text-700 font-medium underline hover:text-froly-500">Mines Paris</a>.
      </p>
      <div className="pt-8">
        <Link
          className="text-text-700 text-xl font-medium underline hover:text-froly-500"
          href="/projects"
        >
          Projects
        </Link>
      </div>
    </main>
  );
}
