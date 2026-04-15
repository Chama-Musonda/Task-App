const DescriptionArea = () => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(42,52,57,0.04)]">
      <h3 className="text-on-surface-variant font-label text-xs font-bold uppercase tracking-widest mb-4">
        Description
      </h3>
      <textarea
        className="w-full bg-transparent border-none focus:ring-0 text-on-surface leading-relaxed text-lg min-h-[180px] p-0 font-body placeholder:text-outline-variant"
        placeholder="Add a more detailed description for this task..."
      >
        We need to refine the visual language for the Project Echo relaunch.
        This includes updating the color palette to more muted, sophisticated
        tones and finalizing the typography hierarchy. The goal is to create a
        'Mindful Canvas' aesthetic that prioritizes whitespace and editorial
        clarity over traditional dashboard clutter.
      </textarea>
    </div>
  );
};

export default DescriptionArea;
