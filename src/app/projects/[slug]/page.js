import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import OtherProjectsCarousel from "@/components/OtherProjectsCarousel";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Client", value: project.client },
    { label: "Category", value: project.category },
  ].filter((m) => m.value);

  return (
    <div className="min-h-screen bg-[#22333B] text-white">
      {/* ── Sticky top bar ── */}
      <nav className="sticky top-0 z-50 bg-[#22333B]/80 backdrop-blur-md border-b border-[#35495E]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 h-14 flex items-center justify-between">
          <TransitionLink
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>// back to work</span>
          </TransitionLink>
          <span className="text-gray-500 font-mono text-xs tracking-wider hidden sm:block uppercase">
            Project Detail
          </span>
        </div>
      </nav>

      {/* ── Content ── */}
      <article className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-16">
        {/* Hero image */}
        <div className="relative max-w-2xl aspect-video rounded-[4px] overflow-hidden border border-[#35495E] mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#22333B]/30 pointer-events-none" />
        </div>

        {/* Title block */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="text-gray-400 font-mono text-sm tracking-wide">
            {project.description}
          </p>
        </div>

        {/* Metadata row */}
        {meta.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-[#35495E] mb-10">
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                  {m.label}
                </span>
                <span className="text-sm text-gray-200">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Long description */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-[#8CD6D0] font-mono tracking-wider mb-4">
            // Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-[#8CD6D0] font-mono tracking-wider mb-4">
            // Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-[#35495E] bg-[#35495E] px-3 py-1.5 text-sm text-white/90 rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8CD6D0] text-[#12161A] font-bold py-3 px-8 rounded-[4px] transition-colors duration-200 hover:bg-[#7BC4BE] cursor-pointer mb-14"
        >
          <span>Visit Live Website</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Divider */}
        <div className="border-t border-[#35495E] pt-10 mb-6" />

        {/* Other projects carousel */}
        <OtherProjectsCarousel currentSlug={project.slug} />
      </article>

      {/* ── Footer ── */}
      <footer className="border-t border-[#35495E] py-6 mt-8">
        <p className="text-center text-xs text-gray-500 font-mono tracking-wider">
          &copy; {new Date().getFullYear()} Mykhailo Kuptsov
        </p>
      </footer>
    </div>
  );
}
