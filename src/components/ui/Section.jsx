const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 md:py-20 lg:py-24 ${className}`}>
    <div className="max-w-350 mx-auto px-6 lg:px-12">{children}</div>
  </section>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 ${className}`}>
    {children}
  </h2>
);

const SectionHeader = ({ title, action }) => (
  <div className="flex justify-between items-center mb-12">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{title}</h2>
    {action}
  </div>
);

export { Section, SectionTitle, SectionHeader };
