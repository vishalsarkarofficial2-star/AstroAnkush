import React from 'react';

interface SacredDividerProps {
  className?: string;
  withOm?: boolean;
}

export function SacredDivider({ className = '', withOm = true }: SacredDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#E5B84B]/60 to-[#E5B84B]" />
      
      {withOm ? (
        <div className="flex items-center gap-2 text-[#E5B84B]">
          <span className="text-xs text-[#FF9A2E]">✦</span>
          <span className="font-serif text-lg font-bold tracking-widest text-[#E5B84B]">ॐ</span>
          <span className="text-xs text-[#FF9A2E]">✦</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-[#E5B84B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B84B]" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#E5B84B] bg-[#1B0505]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B84B]" />
        </div>
      )}

      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#E5B84B]/60 to-[#E5B84B]" />
    </div>
  );
}
