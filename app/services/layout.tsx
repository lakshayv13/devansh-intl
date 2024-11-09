export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <div className="inline-block max-w-full max-h-full text-justify">
        {children}
      </div>
    </section>
  );
}
