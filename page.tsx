import Brand from "@/components/Brand";
import { plannedFeatures } from "@/lib/project";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-10">
      <header className="flex flex-wrap items-center justify-between gap-5 border-b border-accent/50 py-7">
        <Brand />
        <span className="rounded-full border border-accent bg-white px-4 py-2 text-sm text-primary">1 апта · Бастапқы кезең</span>
      </header>

      <main className="flex-1 py-14 sm:py-20">
        <p className="text-sm font-semibold tracking-widest text-primary">СТУДЕНТТІҢ ЖЕКЕ КЕҢІСТІГІ</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">Өзіңді тыңдауға<br />орын бар.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">SENIM — студенттердің эмоциялық әл-ауқатын қолдауға арналған болашақ платформа. Біз қауіпсіз әрі түсінікті қолдау кеңістігін жоспарлап жатырмыз.</p>

        <section aria-labelledby="stage-title" className="mt-10 rounded-2xl border border-accent/70 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-widest text-primary">ЖОБА ӘЗІРЛЕНУДЕ</p>
          <h2 id="stage-title" className="mt-3 text-xl font-semibold">Алғашқы қадам — негізін қалау</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink/85">Бұл — бірінші аптаның бастапқы беті. Осы кезеңде жоба құрылымы мен визуалды бағыты дайындалады. Тіркелу және кіру функцияларын әзірлеу екінші аптаға жоспарланған.</p>
        </section>

        <section aria-labelledby="features-title" className="mt-12">
          <h2 id="features-title" className="text-xl font-semibold">Алда жоспарланған мүмкіндіктер</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {plannedFeatures.map((feature, index) => (
              <article key={feature.title} className="rounded-2xl border border-accent/50 p-6">
                <span aria-hidden="true" className="text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-accent/50 py-6 text-sm text-ink/80">SENIM · Бірінші аптаның оқу жобасы</footer>
    </div>
  );
}
