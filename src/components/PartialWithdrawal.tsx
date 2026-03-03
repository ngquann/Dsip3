import React from 'react';
import { ArrowLeft, Bell, User, TrendingUp, Info, RefreshCw } from 'lucide-react';

export default function PartialWithdrawal({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6f6]">
      <header className="flex items-center justify-between px-6 lg:px-40 py-4 bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-lg font-bold">Rút tiền một phần</h2>
        </div>
        <div className="flex gap-3">
          <button className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 lg:px-10 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row items-end gap-4 w-full">
            <div className="flex flex-col w-full max-w-md">
              <label className="text-slate-700 text-sm font-semibold pb-2">Số tiền muốn rút</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="5,000,000"
                  className="w-full rounded-xl border border-slate-300 h-14 p-4 text-xl font-bold focus:border-[#ec5b13] focus:ring-1 focus:ring-[#ec5b13] outline-none" 
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">VND</span>
              </div>
            </div>
            <button className="flex h-14 items-center justify-center rounded-xl bg-slate-100 px-6 text-sm font-bold text-slate-700 hover:bg-slate-200 border border-slate-200 whitespace-nowrap gap-2">
              <RefreshCw className="w-5 h-5" />
              Tính toán lại
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Danh mục tài sản khuyến nghị bán</h3>
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Tự động tối ưu</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#ec5b13]" />
              <h4 className="text-sm font-bold tracking-wider uppercase text-slate-700">CỔ PHIẾU & ETF</h4>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 w-12"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã CK</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">SL Tối đa</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center w-32">SL Bán</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase">Loại lệnh</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị dự kiến</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                      <td className="p-4 font-bold">FPT</td>
                      <td className="p-4 text-center text-slate-600">100</td>
                      <td className="p-4"><input type="number" defaultValue={20} className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm focus:ring-[#ec5b13] focus:border-[#ec5b13]" /></td>
                      <td className="p-4"><div className="flex items-center gap-1"><span className="text-sm font-medium">MTL</span><Info className="w-4 h-4 text-slate-400" /></div></td>
                      <td className="p-4 text-right font-medium">1,800,000</td>
                    </tr>
                    <tr className="opacity-50 bg-slate-50/50">
                      <td className="p-4"><input type="checkbox" className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                      <td className="p-4 font-bold">VIC</td>
                      <td className="p-4 text-center text-slate-600">200</td>
                      <td className="p-4"><input type="number" defaultValue={50} disabled className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm" /></td>
                      <td className="p-4"><div className="flex items-center gap-1"><span className="text-sm font-medium">MTL</span><Info className="w-4 h-4 text-slate-400" /></div></td>
                      <td className="p-4 text-right font-medium">2,200,000</td>
                    </tr>
                    <tr>
                      <td className="p-4"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                      <td className="p-4 font-bold">E1VFVN30</td>
                      <td className="p-4 text-center text-slate-600">500</td>
                      <td className="p-4"><input type="number" defaultValue={50} className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm focus:ring-[#ec5b13] focus:border-[#ec5b13]" /></td>
                      <td className="p-4"><div className="flex items-center gap-1"><span className="text-sm font-medium">MTL</span><Info className="w-4 h-4 text-slate-400" /></div></td>
                      <td className="p-4 text-right font-medium">1,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#ec5b13]" />
              <h4 className="text-sm font-bold tracking-wider uppercase text-slate-700">CHỨNG CHỈ QUỸ</h4>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 w-12"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mã CK</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">SL Tối đa</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center w-32">SL Bán</th>
                      <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Giá trị dự kiến</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4"><input type="checkbox" defaultChecked className="rounded text-[#ec5b13] focus:ring-[#ec5b13]" /></td>
                      <td className="p-4 font-bold">VNDAF</td>
                      <td className="p-4 text-center text-slate-600">1,200</td>
                      <td className="p-4"><input type="number" defaultValue={0} className="w-full text-center border-slate-200 bg-slate-50 rounded-lg py-1 text-sm focus:ring-[#ec5b13] focus:border-[#ec5b13]" /></td>
                      <td className="p-4 text-right font-medium">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-10">
            <Info className="w-5 h-5 text-[#ec5b13] shrink-0 mt-0.5" />
            <p className="text-sm italic text-slate-600">Tiền bán chứng chỉ quỹ sẽ tự động chuyển về tài khoản ngân hàng đã đăng ký</p>
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-white border-t border-slate-200 px-6 lg:px-40 py-6 z-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm">Tổng giá trị bán dự kiến</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#ec5b13]">5,000,000</span>
              <span className="text-slate-600 font-semibold">VND</span>
            </div>
          </div>
          <button onClick={onNext} className="w-full md:w-64 h-14 rounded-xl bg-[#ec5b13] text-white font-bold text-base shadow-lg shadow-[#ec5b13]/20 hover:bg-[#ec5b13]/90 transition-colors">
            Tiếp tục
          </button>
        </div>
      </footer>
    </div>
  );
}
