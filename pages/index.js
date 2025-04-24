// pages/index.js
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function Frontpage() {
  return (
    <>
      <Head>
        <title>AVANTASOMMER</title>
        <meta name="description" content="Intelligence First. Disruption Always." />
      </Head>

      <div className="min-h-screen bg-black text-white font-light tracking-tight flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-7xl uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ALL / NOTHING
        </motion.h1>
        <motion.p
          className="mt-4 text-md md:text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          by AVANTASOMMER™ — The Force. The Power. The Future.
        </motion.p>

        <div className="mt-8 space-x-4">
          <Link
            href="https://showroom.avantasommer.com"
            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:opacity-80 transition"
          >
            Launch the Showroom
          </Link>

          <Link
            href="/splash"
            className="px-6 py-3 bg-white text-black font-semibold uppercase rounded-full hover:opacity-80 transition"
          >
            Splash Screen
          </Link>
        </div>
      </div>
    </>
  );
}

