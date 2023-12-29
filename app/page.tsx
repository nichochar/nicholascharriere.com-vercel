import CustomLink from "./link"

export default function Home() {
  return (
    <main className="container max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold my-8">Nicholas Charriere</h1>
      <p className="max-w-xl">
        Engineer with a passion for creating things. Currently building{" "}
        <CustomLink href="https://axflow.dev">Axflow</CustomLink>{" "}with{" "}
        <CustomLink href="https://benreinhart.com">Ben Reinhart</CustomLink>.
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        I recently was a founding engineer at{" "}
        <CustomLink href="https://privy.io">Privy</CustomLink>.
        Before that I spent 4 years on the ML platform team at{" "}
        <CustomLink href="https://getcruise.com">Cruise</CustomLink>, 2 years at {" "}
        <CustomLink href="https://pinterest.com">Pinterest</CustomLink>{" "}
        building real-time ML systems, and a few years working full-stack at lesser-known startups.
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        I live in California and grew up in France, where I got my
        engineering Masters from{" "}
        <CustomLink href="https://en.wikipedia.org/wiki/Mines_Paris_%E2%80%93_PSL">Mines Paris</CustomLink>.
      </p>
      <div className="pt-8">
        <CustomLink href="/projects" className="text-xl"> Projects </CustomLink>
      </div>
    </main>
  );
}
