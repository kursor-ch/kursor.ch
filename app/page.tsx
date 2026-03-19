import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-4">
        Kursor <span className="text-amber">CH</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Évaluez la viabilité de votre projet d&apos;expatriation en Suisse.
        Gratuit, confidentiel, en 2 minutes.
      </p>
      <Link
        href="/diagnostic/work"
        className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-white font-semibold text-lg hover:bg-amber/90 transition-colors"
      >
        Commencer le diagnostic
      </Link>
    </main>
  );
}
