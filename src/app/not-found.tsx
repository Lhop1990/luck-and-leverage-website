import { Button } from "@/components/Button";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="bg-ivory-100">
      <Container className="pt-20 md:pt-32 pb-24 md:pb-40">
        <p className="eyebrow mb-8">404 · Page not found</p>
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-balance">
          Wrong door. <br />
          <span className="emph">Right firm.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-charcoal-700 leading-relaxed">
          The page you were looking for has either moved or was never here.
          Everything else is one click away.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to us
          </Button>
        </div>
      </Container>
    </section>
  );
}
