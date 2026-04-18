const Contact = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-lg font-semibold text-neutral-600">Contact US</h1>
      <div className="flex  gap-6">
        <div className="w-1/3 h-44 rounded bg-gray-100 border border-neutral-200"></div>
        <div className="w-1/3 h-44 rounded bg-gray-100 border border-neutral-200"></div>
        <div className="w-1/3 h-44 rounded bg-gray-100 border border-neutral-200"></div>
      </div>
      <div className="w-full rounded h-56 bg-gray-100 border border-neutral-200"></div>
      <div className="w-full rounded h-28 bg-gray-100 border border-neutral-200"></div>
      <div className="w-full rounded h-8 bg-gray-100 border border-neutral-200"></div>
    </section>
  );
};

export default Contact;
