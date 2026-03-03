import React from 'react';
import { ArrowLeft, Bell, Info, ChevronDown } from 'lucide-react';

export default function ConfirmSettlement({ type, onNext, onBack }: { type: 'PARTIAL' | 'FULL', onNext: () => void, onBack: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f6]">
      <header className="flex items-center justify-between px-6 lg:px-40 py-4 bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-lg font-bold">{type === 'PARTIAL' ? 'Rút tiền một phần' : 'Dừng tích lũy'}</h2>
        </div>
        <button className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 py-8 px-4 lg:px-10 max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Xác nhận thông tin danh mục bán</h1>
          <p className="text-slate-500 text-sm">Vui lòng kiểm tra lại thông tin trước khi xác nhận tất toán.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Danh mục tài sản bán</h3>
          
          {type === 'PARTIAL' ? (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã CK</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">SL Bán</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị dự kiến</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-bold">FPT</td>
                    <td className="p-4 text-center">20</td>
                    <td className="p-4 text-right font-medium">1,800,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">E1VFVN30</td>
                    <td className="p-4 text-center">50</td>
                    <td className="p-4 text-right font-medium">1,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-[#ec5b13] uppercase mb-3">Cổ phiếu & ETF</h4>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã CK</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">SL Bán</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị dự kiến</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold">FPT</td>
                        <td className="p-4 text-center">1,200</td>
                        <td className="p-4 text-right font-medium">115,200,000</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">VIC</td>
                        <td className="p-4 text-center">500</td>
                        <td className="p-4 text-right font-medium">21,500,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#ec5b13] uppercase mb-3">Chứng chỉ quỹ</h4>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã quỹ</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">SL Bán</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị dự kiến</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold">VNDAF</td>
                        <td className="p-4 text-center">1,500.24</td>
                        <td className="p-4 text-right font-medium">18,450,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Thông tin tất toán</h3>
            <span className="text-sm font-medium text-slate-500">Mã kế hoạch: PLAN-99283</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Tổng giá trị bán dự kiến</span>
              <span className="font-bold text-lg">{type === 'PARTIAL' ? '5,000,000 VND' : '125,450,000 VND'}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Phí tất toán {type === 'FULL' && 'trước hạn'}</span>
              <span className="font-bold text-[#ec5b13]">{type === 'PARTIAL' ? '- 0 VND' : '- 500,000 VND'}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Thuế TNCN (tạm tính)</span>
              <span className="font-bold text-[#ec5b13]">{type === 'PARTIAL' ? '- 5,000 VND' : '- 125,450 VND'}</span>
            </div>
            <div className="flex justify-between items-center py-4 bg-slate-50 rounded-lg px-4 mt-4">
              <span className="font-bold text-slate-800">Tổng tiền thực nhận (dự kiến)</span>
              <span className="font-bold text-2xl text-[#ec5b13]">{type === 'PARTIAL' ? '4,995,000 VND' : '124,824,550 VND'}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Tài khoản cơ sở nhận tiền bán chứng khoán</h3>
          <div className="relative">
            <select className="w-full appearance-none border border-slate-300 rounded-xl p-4 pr-10 font-bold text-slate-800 focus:border-[#ec5b13] focus:ring-1 focus:ring-[#ec5b13] outline-none bg-white">
              <option value="01">0001234567 - 01</option>
              <option value="06">0001234567 - 06</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-slate-500" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-8 bg-[#ec5b13]/5 p-4 rounded-lg border border-[#ec5b13]/20">
          <Info className="w-5 h-5 text-[#ec5b13] shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700">
            Lưu ý: Thời gian tiền về tài khoản có thể mất từ 1-3 ngày làm việc tùy thuộc vào quy định của từng loại tài sản.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button onClick={onNext} className="flex-1 h-14 rounded-xl bg-[#ec5b13] text-white font-bold text-base shadow-lg shadow-[#ec5b13]/20 hover:bg-[#ec5b13]/90 transition-colors">
            Xác nhận tất toán
          </button>
          <button onClick={onBack} className="flex-1 h-14 rounded-xl bg-slate-100 text-slate-700 font-bold text-base hover:bg-slate-200 transition-colors">
            Quay lại
          </button>
        </div>
      </main>
    </div>
  );
}
