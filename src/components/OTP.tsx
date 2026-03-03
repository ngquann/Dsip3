import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Bell, ShieldCheck } from 'lucide-react';

export default function OTP({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f6]">
      <header className="flex items-center justify-between px-6 lg:px-40 py-4 bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-lg font-bold">Xác thực OTP</h2>
        </div>
        <button className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 py-12 px-4 lg:px-10 max-w-md mx-auto w-full flex flex-col items-center">
        <div className="w-20 h-20 bg-[#ec5b13]/10 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-[#ec5b13]" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-center">Nhập mã xác thực</h1>
        <p className="text-slate-500 text-sm text-center mb-8">
          Mã OTP đã được gửi đến số điện thoại <span className="font-bold text-slate-800">098***1234</span>
        </p>

        <div className="flex gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-2xl font-bold border border-slate-300 rounded-xl focus:border-[#ec5b13] focus:ring-2 focus:ring-[#ec5b13]/20 outline-none transition-all"
            />
          ))}
        </div>

        <div className="text-sm text-slate-500 mb-12">
          Không nhận được mã? <button className="text-[#ec5b13] font-bold hover:underline">Gửi lại (59s)</button>
        </div>

        <button 
          onClick={onNext} 
          disabled={!isComplete}
          className={`w-full h-14 rounded-xl font-bold text-base transition-all ${isComplete ? 'bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20 hover:bg-[#ec5b13]/90' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          Xác nhận
        </button>
      </main>
    </div>
  );
}
