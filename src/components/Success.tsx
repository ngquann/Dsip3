import React from 'react';
import { CheckCircle2, Home } from 'lucide-react';

export default function Success({ onHome }: { onHome: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#ec5b13]/5 items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#ec5b13]/10 max-w-md w-full flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 className="w-14 h-14 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Giao dịch thành công!</h1>
        <p className="text-slate-500 mb-8">Yêu cầu tất toán kế hoạch của bạn đã được ghi nhận và đang được xử lý.</p>
        
        <div className="w-full bg-slate-50 rounded-xl p-4 mb-8 text-left space-y-3 border border-slate-100">
          <div className="flex justify-between">
            <span className="text-slate-500 text-sm">Thời gian</span>
            <span className="font-bold text-slate-700 text-sm">24/05/2024 14:30:22</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 text-sm">Số tiền dự kiến</span>
            <span className="font-bold text-[#ec5b13] text-sm">124,824,550 VND</span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button onClick={onHome} className="w-full h-14 rounded-xl bg-[#ec5b13] text-white font-bold text-base shadow-lg shadow-[#ec5b13]/20 hover:bg-[#ec5b13]/90 transition-colors flex items-center justify-center gap-2">
            <Home className="w-5 h-5" />
            Quản lý DSIP
          </button>
        </div>
      </div>
    </div>
  );
}
