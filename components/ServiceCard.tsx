export type Service = {
  method: "GET" | "POST";
  path: string;
  title: string;
  description: string;
};

const methodStyles: Record<Service["method"], string> = {
  POST: "bg-seal/10 text-seal-dark",
  GET: "bg-gold/10 text-gold",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group border border-line bg-card p-5 transition-colors hover:border-seal">
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px]">
        <span className={`rounded-sm px-1.5 py-0.5 font-medium ${methodStyles[service.method]}`}>
          {service.method}
        </span>
        <span dir="ltr" className="text-ink-soft">{service.path}</span>
      </div>
      <h3 className="font-display text-lg text-ink">{service.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{service.description}</p>
    </div>
  );
}
