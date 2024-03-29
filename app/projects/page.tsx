import {HomeIcon} from '@radix-ui/react-icons';
import CustomLink from '../link';

export const metadata = {
  title: "Projects | Nicholas Charriere"
}

export default function Home() {
  return (
    <main className="container max-w-xl mx-auto">
      <CustomLink className="absolute top-4 left-4 mb-10 opacity-50 flex gap-2 items-center no-underline font-thin" href="/">
        <HomeIcon />
      </CustomLink>
      <h1 className="text-4xl mt-4 font-bold">Projects</h1>

      <div className="flex flex-col">
        <a href="https://axflow.dev" className="hover:text-froly-500 transition-all duration-300">
          <h2 className="text-xl font-medium pt-6">Axflow</h2>
        </a>
        <p className="max-w-xl pt-1">
          Currendly building this company. Our mission is to help product teams ship AI products faster. We build tools that cover the entire AI production lifecycle.
        </p>
        <a href="https://github.com/nichochar" className="hover:text-froly-500 transition-all duration-300">
          <h2 className="text-xl font-medium pt-6">Open source</h2>
        </a>
        <p className="max-w-xl pt-1">
          I have contributed to many open source projects. I maintained
          pymemcache and snappass during my tenure at Pinterest. All my
          contributions are on GitHub.
        </p>
        <a
          href="https://blockchainsmokers.xyz"
          className="hover:text-froly-500 transition-all duration-300"
        >
          <h2 className="text-xl font-medium pt-6">Blockchainsmokers</h2>
        </a>
        <p className="max-w-xl pt-1">
          I was curious about how blockchain technology worked, so I built an
          NFT collection to learn more about it. Art and code were all from me.
        </p>
        <a href="https://avostories.com" className="hover:text-froly-500 transition-all duration-300">
          <h2 className="text-xl font-medium pt-6">Avostories</h2>
        </a>
        <p className="max-w-xl pt-1">
          Write for 5 minutes, every day. I built this app to help my wife (and
          other creative writers) develop a daily habit.
        </p>
        <a href="https://bytesizetheories.com" className="hover:text-froly-500 transition-all duration-300">
          <h2 className="text-xl font-medium pt-6">Byte Size Theories</h2>
        </a>
        <p className="max-w-xl pt-1">
          A blog focused on small bites of knowledge in software & startups.
        </p>
        <a
          href="https://paragraph.xyz/@nichochar"
          className="hover:text-froly-500 transition-all duration-300"
        >
          <h2 className="text-xl font-medium pt-6">Web3 in 420</h2>
        </a>
        <p className="max-w-xl pt-1">
          Another blog, focused on digestible explanations of web3 concepts.
        </p>
      </div>
    </main>
  );
}
