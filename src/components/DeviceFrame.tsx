import React from 'react';

interface DeviceFrameProps {
  device: 'mobile' | 'tablet';
  children: React.ReactNode;
  scrollRef?: React.RefObject<HTMLDivElement>;
  onScroll?: () => void;
}

export default function DeviceFrame({ device, children, scrollRef, onScroll }: DeviceFrameProps) {
  const frameClass = device === 'mobile' ? 'preview-device-mobile' : 'preview-device-tablet';

  return (
    <div className={`preview-device-shell ${frameClass}`}>
      <div className="preview-device-screen">
        <div ref={scrollRef} onScroll={onScroll} className="preview-device-scroll no-scrollbar">
          {children}
        </div>
      </div>
      <div className="preview-device-home" />
    </div>
  );
}
