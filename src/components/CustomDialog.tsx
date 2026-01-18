import React from 'react';
import useCardsStore from '@/store';
import { AlertCircle, HelpCircle, X } from 'lucide-react';

const Dialog: React.FC = () => {
    const dialog = useCardsStore(state => state.dialog);
    const hideDialog = useCardsStore(state => state.hideDialog);

    if (!dialog.isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={hideDialog}
        >
            <div
                className="w-full max-w-sm bg-[#1c1c1e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 ring-1 ring-white/10"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-6 pt-6 pb-2 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${dialog.type === 'confirm' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-amber-500/10 text-amber-400'
                        }`}>
                        {dialog.type === 'confirm' ? <HelpCircle size={28} /> : <AlertCircle size={28} />}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        {dialog.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed whitespace-pre-wrap">
                        {dialog.message}
                    </p>
                </div>

                {/* Actions */}
                <div className="p-6 flex flex-col sm:flex-row gap-2">
                    {dialog.type === 'confirm' && (
                        <button
                            className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-all"
                            onClick={hideDialog}
                        >
                            취소
                        </button>
                    )}
                    <button
                        className={`flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg transition-all active:scale-95 ${dialog.type === 'confirm'
                                ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20'
                                : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20'
                            }`}
                        onClick={() => {
                            if (dialog.onConfirm) dialog.onConfirm();
                            hideDialog();
                        }}
                    >
                        {dialog.type === 'confirm' ? '확인' : '닫기'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
