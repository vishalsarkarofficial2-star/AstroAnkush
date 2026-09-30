import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#08060A] text-[#F7ECD3] flex flex-col items-center justify-start p-6 pt-24 animate-pulse">
      {/* Top Banner Skeleton */}
      <div className="w-full max-w-4xl h-10 bg-[#17121C] rounded-lg border border-[#E5B84B]/10 mb-8 flex items-center justify-center">
        <div className="h-4 w-48 bg-[#E5B84B]/20 rounded" />
      </div>

      {/* Main Content Skeleton */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="h-12 w-3/4 bg-[#17121C] rounded-lg border border-[#E5B84B]/10" />
          <div className="h-6 w-1/2 bg-[#17121C] rounded-lg" />
          <div className="h-64 w-full bg-[#17121C] rounded-2xl border border-[#E5B84B]/15" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-[#17121C] rounded" />
            <div className="h-4 w-5/6 bg-[#17121C] rounded" />
            <div className="h-4 w-4/6 bg-[#17121C] rounded" />
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="space-y-6">
          <div className="h-48 w-full bg-[#17121C] rounded-2xl border border-[#E5B84B]/15" />
          <div className="h-32 w-full bg-[#17121C] rounded-2xl border border-[#E5B84B]/15" />
        </div>
      </div>
    </div>
  );
}
