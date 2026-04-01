const Stats = () => {
  const stats = [
    { number: "16", label: "Semanas" },
    { number: "10", label: "Sesiones 1:1" },
    { number: "5", label: "Pilares" },
    { number: "4", label: "Bloques" },
  ];

  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl md:text-6xl text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
