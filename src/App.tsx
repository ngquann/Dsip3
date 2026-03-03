/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Screen } from './types';
import MethodSelection from './components/MethodSelection';
import PartialWithdrawal from './components/PartialWithdrawal';
import FullWithdrawal from './components/FullWithdrawal';
import ConfirmSettlement from './components/ConfirmSettlement';
import OTP from './components/OTP';
import Success from './components/Success';
import PlanAdjustmentModal from './components/PlanAdjustmentModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('MethodSelection');
  const [withdrawalType, setWithdrawalType] = useState<'PARTIAL' | 'FULL'>('PARTIAL');

  const handleMethodSelectionNext = (type: 'PARTIAL' | 'FULL') => {
    setWithdrawalType(type);
    if (type === 'PARTIAL') {
      setCurrentScreen('PartialWithdrawal');
    } else {
      setCurrentScreen('FullWithdrawal');
    }
  };

  const handleBack = () => {
    if (currentScreen === 'PartialWithdrawal' || currentScreen === 'FullWithdrawal') {
      setCurrentScreen('MethodSelection');
    } else if (currentScreen === 'ConfirmSettlement') {
      setCurrentScreen(withdrawalType === 'PARTIAL' ? 'PartialWithdrawal' : 'FullWithdrawal');
    } else if (currentScreen === 'OTP') {
      setCurrentScreen('ConfirmSettlement');
    } else if (currentScreen === 'ContractSigning') {
      setCurrentScreen('ConfirmSettlement');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {currentScreen === 'MethodSelection' && (
        <MethodSelection onNext={handleMethodSelectionNext} />
      )}
      {currentScreen === 'PartialWithdrawal' && (
        <PartialWithdrawal 
          onNext={() => setCurrentScreen('ConfirmSettlement')} 
          onBack={handleBack} 
        />
      )}
      {currentScreen === 'FullWithdrawal' && (
        <FullWithdrawal 
          onNext={() => setCurrentScreen('ConfirmSettlement')} 
          onBack={handleBack} 
        />
      )}
      {currentScreen === 'ConfirmSettlement' && (
        <ConfirmSettlement 
          type={withdrawalType}
          onNext={() => setCurrentScreen(withdrawalType === 'FULL' ? 'ContractSigning' : 'OTP')} 
          onBack={handleBack} 
        />
      )}
      {currentScreen === 'ContractSigning' && (
        <PlanAdjustmentModal 
          onConfirm={() => setCurrentScreen('Success')} 
          onClose={handleBack} 
        />
      )}
      {currentScreen === 'OTP' && (
        <OTP 
          onNext={() => setCurrentScreen('Success')} 
          onBack={handleBack} 
        />
      )}
      {currentScreen === 'Success' && (
        <Success onHome={() => setCurrentScreen('MethodSelection')} />
      )}
    </div>
  );
}

