export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-8 px-6 py-24">
        <h1 className="text-right text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          ?????
        </h1>
        <p className="text-right text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          ??? ????? Next.js ???? ?????? ????? ??? Vercel.
        </p>
        <div className="mt-6 flex items-center justify-end gap-3">
          <a
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            ????? Next.js
          </a>
          <a
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </div>
      </main>
    </div>
  );
}
