import React, { useState } from 'react';
import { FileText, ArrowLeft, PenTool } from 'lucide-react';

export default function PlanAdjustmentModal({ onClose, onConfirm }: { onClose: () => void, onConfirm: () => void }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f6]">
      <header className="flex items-center justify-between px-6 lg:px-40 py-4 bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-lg font-bold">Ký hợp đồng</h2>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 lg:px-10 max-w-4xl mx-auto w-full">
        <div className="bg-white w-full rounded-xl shadow-sm border border-slate-200 flex flex-col">
          <div className="flex items-center gap-3 p-6 border-b border-slate-100">
            <div className="w-10 h-10 rounded-lg bg-[#ec5b13]/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#ec5b13]" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase">Xác nhận điều chỉnh kế hoạch</h2>
              <p className="text-sm text-slate-500">Vui lòng kiểm tra kỹ thông tin trước khi ký</p>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">PHỤ LỤC THAY ĐỔI TRẠNG THÁI KẾ HOẠCH TÍCH LŨY</h3>
              <p className="text-sm text-slate-500 italic">Số: 2024/PL-TL/00452-98</p>
            </div>

            <div className="space-y-6 text-slate-700">
              <section>
                <h4 className="font-bold text-slate-900 mb-2">1. THÔNG TIN KHÁCH HÀNG</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg">
                  <p><span className="text-slate-500">Họ và tên:</span> NGUYỄN VĂN A</p>
                  <p><span className="text-slate-500">Số CMND/CCCD:</span> 0123456789xx</p>
                  <p><span className="text-slate-500">Mã kế hoạch:</span> PLAN-99283</p>
                  <p><span className="text-slate-500">Ngày bắt đầu:</span> 15/05/2023</p>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-slate-900 mb-2">2. NỘI DUNG ĐIỀU CHỈNH</h4>
                <p className="mb-4">Căn cứ theo yêu cầu của Khách hàng, hai bên thống nhất điều chỉnh trạng thái kế hoạch tích lũy như sau:</p>
                <div className="space-y-3 border-l-4 border-[#ec5b13]/40 pl-4 py-1">
                  <div className="flex justify-between">
                    <span>Trạng thái hiện tại:</span>
                    <span className="font-medium text-green-600">Đang tích lũy</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trạng thái mới:</span>
                    <span className="font-bold text-[#ec5b13]">Dừng tích lũy (Tất toán trước hạn)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ngày hiệu lực:</span>
                    <span className="font-medium">24/05/2024</span>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-slate-900 mb-2">3. ĐIỀU KHOẢN CAM KẾT</h4>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                  <li>Việc dừng tích lũy sẽ chấm dứt các quyền lợi liên quan đến lãi suất tích lũy định kỳ kể từ ngày hiệu lực.</li>
                  <li>Các khoản phí phát sinh do tất toán trước hạn (nếu có) sẽ được khấu trừ trực tiếp vào số dư tích lũy hiện tại của Khách hàng.</li>
                  <li>Số dư còn lại sau khi trừ các khoản phí sẽ được chuyển về tài khoản thanh toán của Khách hàng trong vòng 03 ngày làm việc.</li>
                  <li>Bản phụ lục này là một phần không thể tách rời của Hợp đồng tích lũy số 00452-98 đã ký trước đó.</li>
                </ul>
              </section>

              <section className="pt-6">
                <div className="relative h-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-slate-50">
                  <div className="text-slate-400 flex flex-col items-center">
                    <PenTool className="w-8 h-8 mb-2" />
                    <span className="text-xs uppercase font-semibold">Vùng chữ ký điện tử</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 rounded-b-xl">
            <div className="flex items-start gap-3 mb-6">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 text-[#ec5b13] rounded border-slate-300 focus:ring-[#ec5b13]" 
              />
              <label htmlFor="terms" className="text-sm text-slate-600 leading-tight cursor-pointer">
                Tôi xác nhận đã đọc, hiểu rõ và hoàn toàn đồng ý với các nội dung thay đổi kế hoạch, các điều khoản và điều kiện được nêu trong bản phụ lục này.
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button onClick={onClose} className="flex-1 py-4 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-all">
                Hủy bỏ
              </button>
              <button 
                onClick={onConfirm}
                disabled={!agreed}
                className={`flex-[2] py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${agreed ? 'bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/30 hover:bg-[#ec5b13]/90' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
              >
                <PenTool className="w-5 h-5" />
                Ký xác nhận thay đổi
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
