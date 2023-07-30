import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Image
        src="/nicholas2.jpg"
        width="200"
        height="200"
        className="rounded-full"
        alt="Nicholas Charriere"
      />
      <h1 className="text-4xl font-extrabold m-8">Nicholas Charriere</h1>
      <p className="max-w-xl">
        I&rsquo;m a programmer that loves building things, working on hard
        problems and collaborating with interesting people.
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        I&rsquo;m currently building an AI company named{" "}
        <a
          className="text-text-700 font-medium underline hover:text-froly-500"
          href="https://axilla.io"
        >
          Axilla
        </a>{" "}
        (part of YC summer 2023) with my co-founder and good friend{" "}
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
        , where I built an authentication SDK. Before that, I spent 4 years as a
        staff engineer on the ML platform team at{" "}
        <a
          href="https://getcruise.com"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          Cruise
        </a>
        , focused on automating the AI lifecycle.
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        I grew up in France, and moved to the Bay Area after getting my
        engineering Masters from Mines ParisTech. I spent time in a few
        different companies, notably building real-time systems at{" "}
        <a
          href="https://pinterest.com"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          Pinterest
        </a>{" "}
        before joining Cruise.
      </p>
      <p className="max-w-xl pt-8 sm:pt-6">
        In my spare time, I enjoy spending time with my wife Emily, going on
        adventures with my dog Zoey,{" "}
        <a
          href="https://www.strava.com/athletes/50865371"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          cycling
        </a>
        , reading,{" "}
        <a
          href="https://500px.com/p/nichochar?view=photos"
          className="text-text-700 font-medium underline hover:text-froly-500"
        >
          photography
        </a>{" "}
        and cooking.
      </p>
      <Link
        className="pt-16 text-text-700 text-xl font-medium underline hover:text-froly-500"
        href="/projects"
      >
        Projects
      </Link>
    </main>
  );
}
