const VisualAttachments = () => {
  return (
    <div className="relative overflow-hidden rounded-xl h-40 group cursor-pointer">
      <img
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        data-alt="minimal workspace with a laptop, open notebook, and a small plant on a light wood desk"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjyiydU9_GS7ozmXFJX0ntiG6lqU6Q89fU7jANteoYXeXzil2XvWEAIr-tUE_x50p0p-pa_GqdqFDsecHf0G37OEN7cBXHdclxFXsrCaWQh0PX11M46Frry7DOUhySkayNBDAVnVKp-fR3-ldd5Wx9ccB-rTdVfARPmTO0sanazfHwIUSMI8Pq8AEX4Dgmb2p2BESyFXzRe_hHaDgoNgHLIND9WTxtxiAfASOYQ3m28PLYS8mPbrtvLCFw-IfNxAqeO6xrx8X733o"
      />
      <div className="absolute inset-0 bg-on-background/30 flex flex-col justify-end p-4">
        <span className="text-white text-xs font-bold uppercase tracking-widest">
          3 Attachments
        </span>
        <span className="text-white/80 text-sm">Review design specs...</span>
      </div>
    </div>
  );
};
export default VisualAttachments;
