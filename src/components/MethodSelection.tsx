import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, TrendingUp, XCircle, Info } from 'lucide-react';

export default function MethodSelection({ onNext }: { onNext: (type: 'PARTIAL' | 'FULL') => void }) {
  const [selected, setSelected] = useState<'PARTIAL' | 'FULL'>('PARTIAL');
  const [amount, setAmount] = useState('5.000.000');

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto bg-[#f8f6f6]">
      <header className="flex items-center justify-between px-6 py-4 bg-white/50 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Tất toán kế hoạch</h2>
        </div>
        <button className="p-2 bg-[#ec5b13]/10 text-[#ec5b13] rounded-xl hover:bg-[#ec5b13]/20 transition-colors">
          <HelpCircle className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-1 px-4 py-6 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Lựa chọn phương thức tất toán</h1>
          <p className="text-slate-500 text-sm">Vui lòng chọn phương thức phù hợp với nhu cầu và lộ trình đầu tư của bạn</p>
        </div>

        <div className="flex flex-col gap-4">
          <label className={`relative flex flex-col gap-4 rounded-xl border-2 p-5 cursor-pointer transition-all ${selected === 'PARTIAL' ? 'border-[#ec5b13] bg-[#ec5b13]/5' : 'border-slate-200 bg-white hover:border-[#ec5b13]/50'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${selected === 'PARTIAL' ? 'bg-[#ec5b13] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Tiếp tục tích lũy</p>
                  <p className="text-slate-500 text-xs mt-1">Rút một phần kế hoạch và tiếp tục duy trì lộ trình đầu tư</p>
                </div>
              </div>
              <input 
                type="radio" 
                name="method" 
                checked={selected === 'PARTIAL'} 
                onChange={() => setSelected('PARTIAL')}
                className="w-5 h-5 text-[#ec5b13] focus:ring-[#ec5b13]" 
              />
            </div>
            
            {selected === 'PARTIAL' && (
              <div className="mt-2 flex flex-col gap-4 border-t border-[#ec5b13]/20 pt-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Nhập số tiền muốn rút</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full border-b-2 border-slate-300 bg-transparent px-2 py-3 text-3xl font-bold text-[#ec5b13] focus:border-[#ec5b13] outline-none transition-colors" 
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 font-bold">VNĐ</div>
                  </div>
                  <div className="flex justify-between px-1 mt-1">
                    <span className="text-xs text-slate-500 italic">Số dư khả dụng: <span className="font-bold text-slate-700">50.000.000 đ</span></span>
                    <button className="text-xs font-bold text-[#ec5b13] hover:underline">Rút tối đa</button>
                  </div>
                </div>
              </div>
            )}
          </label>

          <label className={`relative flex items-center justify-between rounded-xl border-2 p-5 cursor-pointer transition-all ${selected === 'FULL' ? 'border-[#ec5b13] bg-[#ec5b13]/5' : 'border-slate-200 bg-white hover:border-[#ec5b13]/50'}`}>
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${selected === 'FULL' ? 'bg-[#ec5b13] text-white' : 'bg-slate-100 text-slate-500'}`}>
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Dừng tích lũy</p>
                <p className="text-slate-500 text-xs mt-1">Thực hiện ký thay đổi kế hoạch và dừng lộ trình đầu tư hiện tại</p>
              </div>
            </div>
            <input 
              type="radio" 
              name="method" 
              checked={selected === 'FULL'} 
              onChange={() => setSelected('FULL')}
              className="w-5 h-5 text-[#ec5b13] focus:ring-[#ec5b13]" 
            />
          </label>
        </div>

        <div className="rounded-xl bg-slate-100 p-4 flex gap-3">
          <Info className="w-5 h-5 text-[#ec5b13] shrink-0" />
          <p className="text-xs font-medium leading-relaxed text-slate-600">
            Lưu ý: Việc tất toán có thể ảnh hưởng đến lợi nhuận dự kiến ban đầu. Vui lòng kiểm tra kỹ các thông số trước khi xác nhận.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <button 
            onClick={() => onNext(selected)}
            className="w-full py-4 rounded-xl bg-[#ec5b13] text-white font-bold hover:bg-[#ec5b13]/90 transition-all shadow-lg shadow-[#ec5b13]/20"
          >
            Tiếp tục
          </button>
        </div>
      </main>
    </div>
  );
}
