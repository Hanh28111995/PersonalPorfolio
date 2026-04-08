"use client";

export default function FAB() {
  return (
    <div className="fixed bottom-8 right-8 z-40 md:hidden">
      <button className="bg-primary-container text-on-primary-container w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}
