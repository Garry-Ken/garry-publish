import { Copy, CheckCircle2, Download, Smartphone, Tablet, Monitor, Loader2, Link2, Unlink2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolbarProps {
  previewDevice: 'mobile' | 'tablet' | 'pc';
  onDeviceChange: (device: 'mobile' | 'tablet' | 'pc') => void;
  onExportPdf: () => void;
  onExportHtml: () => void;
  onCopy: () => void;
  copied: boolean;
  isCopying: boolean;
  scrollSyncEnabled: boolean;
  onToggleScrollSync: () => void;
}

export default function Toolbar({ previewDevice, onDeviceChange, onExportPdf, onExportHtml, onCopy, copied, isCopying, scrollSyncEnabled, onToggleScrollSync }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-[1024px]">
      <div className="hidden md:flex bg-[#00000008] dark:bg-[#ffffff10] p-1 rounded-full backdrop-blur-md">
        {(['mobile', 'tablet', 'pc'] as const).map(device => (
          <button
            key={device}
            onClick={() => onDeviceChange(device)}
            className={`p-2 rounded-full transition-all ${previewDevice === device ? 'bg-white dark:bg-[#2c2c2e] shadow-sm' : 'text-[#86868b] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'}`}
            title={device === 'mobile' ? '手机视图 (480px)' : device === 'tablet' ? '平板视图 (768px)' : '桌面视图 (PC)'}
          >
            {device === 'mobile' ? <Smartphone size={16} /> : device === 'tablet' ? <Tablet size={16} /> : <Monitor size={16} />}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={onToggleScrollSync}
          className={`apple-export-btn !bg-[#00000008] dark:!bg-[#ffffff10] border-transparent ${scrollSyncEnabled ? 'text-[#0066cc] dark:text-[#0a84ff]' : 'text-[#86868b] dark:text-[#a1a1a6]'}`}
          title={scrollSyncEnabled ? '关闭滚动同步' : '开启滚动同步'}
        >
          {scrollSyncEnabled ? <Link2 size={14} /> : <Unlink2 size={14} />}
          <span className="hidden sm:inline">{scrollSyncEnabled ? '同步开' : '同步关'}</span>
        </motion.button>

        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={onExportPdf}
          className="apple-export-btn !hidden sm:!flex !bg-[#00000008] dark:!bg-[#ffffff10] border-transparent"
        >
          <Download size={14} />
          导出 PDF
        </motion.button>

        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={onExportHtml}
          className="apple-export-btn !hidden lg:!flex !bg-[#00000008] dark:!bg-[#ffffff10] border-transparent"
        >
          <Download size={14} />
          导出 HTML
        </motion.button>

        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={onCopy} disabled={isCopying}
          className={copied ? "apple-copy-btn-success apple-copy-btn" : isCopying ? "apple-copy-btn opacity-80 cursor-not-allowed" : "apple-copy-btn"}
        >
          {copied ? <CheckCircle2 size={16} /> : isCopying ? <Loader2 className="animate-spin" size={16} /> : <Copy size={16} />}
          <span className="hidden sm:inline">{copied ? '已复制！请贴往公众号' : isCopying ? '正在打包图片...' : '复制到公众号'}</span>
          <span className="sm:hidden">{copied ? '已复制' : isCopying ? '打包中...' : '复制'}</span>
        </motion.button>
      </div>
    </div>
  );
}
