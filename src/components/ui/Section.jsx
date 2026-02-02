const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-12 md:py-14 lg:py-16 ${className}`}>
    <div className="max-w-350 mx-auto px-6 lg:px-12">{children}</div>
  </section>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-10 ${className}`}>
    {children}
  </h2>
);

const SectionHeader = ({ title, action }) => (
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
    {action}
  </div>
);

export { Section, SectionTitle, SectionHeader };
