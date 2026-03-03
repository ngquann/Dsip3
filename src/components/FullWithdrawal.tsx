import React from 'react';
import { ArrowLeft, Bell, Info } from 'lucide-react';

export default function FullWithdrawal({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f6]">
      <header className="flex items-center justify-between px-6 lg:px-40 py-4 bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-lg font-bold">Dừng tích lũy</h2>
        </div>
        <button className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 py-8 px-4 lg:px-10 max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Danh mục tài sản tất toán toàn bộ</h1>
          <p className="text-slate-500 text-sm">Vui lòng kiểm tra lại danh sách tài sản sẽ được bán để tất toán mục tiêu.</p>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-bold tracking-wider uppercase text-[#ec5b13] mb-4">CỔ PHIẾU & ETF</h4>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 w-12"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã CK</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">Số lượng tối đa</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center w-32">Số lượng bán</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Loại lệnh</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị bán dự kiến</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                    <td className="p-4 font-bold">FPT</td>
                    <td className="p-4 text-center text-slate-600">1,200</td>
                    <td className="p-4"><input type="text" value="1,200" disabled className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm" /></td>
                    <td className="p-4"><span className="text-xs font-medium bg-[#ec5b13]/10 text-[#ec5b13] px-2 py-1 rounded">MTL</span></td>
                    <td className="p-4 text-right font-medium">115,200,000 VND</td>
                  </tr>
                  <tr>
                    <td className="p-4"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                    <td className="p-4 font-bold">VIC</td>
                    <td className="p-4 text-center text-slate-600">500</td>
                    <td className="p-4"><input type="text" value="500" disabled className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm" /></td>
                    <td className="p-4"><span className="text-xs font-medium bg-[#ec5b13]/10 text-[#ec5b13] px-2 py-1 rounded">MTL</span></td>
                    <td className="p-4 text-right font-medium">21,500,000 VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-bold tracking-wider uppercase text-[#ec5b13] mb-4">CHỨNG CHỈ QUỸ</h4>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 w-12"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã quỹ</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">Số lượng tối đa</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center w-32">Số lượng bán</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị bán dự kiến</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                    <td className="p-4 font-bold">VNDAF</td>
                    <td className="p-4 text-center text-slate-600">1,500.24</td>
                    <td className="p-4"><input type="text" value="1,500.24" disabled className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm" /></td>
                    <td className="p-4 text-right font-medium">18,450,000 VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-8">
          <Info className="w-5 h-5 text-[#ec5b13] shrink-0 mt-0.5" />
          <p className="text-sm italic text-slate-600">Tiền bán chứng chỉ quỹ sẽ tự động chuyển về tài khoản ngân hàng đã đăng ký.</p>
        </div>

        <div className="bg-[#ec5b13]/5 rounded-xl p-6 border border-[#ec5b13]/20 flex justify-between items-center mb-8">
          <span className="text-slate-700 font-medium">Tổng giá trị bán dự kiến:</span>
          <span className="text-2xl font-bold text-[#ec5b13]">125,450,000 VND</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button onClick={onNext} className="flex-1 h-14 rounded-xl bg-[#ec5b13] text-white font-bold text-base shadow-lg shadow-[#ec5b13]/20 hover:bg-[#ec5b13]/90 transition-colors">
            Tiếp tục →
          </button>
          <button onClick={onBack} className="flex-1 h-14 rounded-xl bg-slate-100 text-slate-700 font-bold text-base hover:bg-slate-200 transition-colors">
            Quay lại
          </button>
        </div>
      </main>
    </div>
  );
}
