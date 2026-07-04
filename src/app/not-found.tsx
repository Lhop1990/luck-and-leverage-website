import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40">
      <p className="eyebrow mb-8">404 · Page not found</p>
      <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[0.9]">
        Wrong door. <br />
        <span className="text-lime">Right firm.</span>
      </h1>
      <p className="mt-10 max-w-xl text-base md:text-lg text-ink/80 leading-relaxed">
        The page you were looking for has either moved or was never here.
        Everything else is one click away.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/" variant="primary">
          Back to home
        </Button>
        <Button href="/contact" variant="outline">
          Talk to us
        </Button>
      </div>
    </section>
  );
}
