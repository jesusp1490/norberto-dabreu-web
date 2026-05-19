type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
      {eyebrow ? (
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#c4914b]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
        {description}
      </p>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-white/35">
          Content in progress
        </p>
      </div>
    </section>
  );
}