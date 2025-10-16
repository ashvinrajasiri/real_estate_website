"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface MortgageCalculatorProps {
  propertyPrice: string; // e.g. "$150,000"
}

export default function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  // Parse price from string format like "$150,000" to number
  const parsePrice = (priceString: string): number => {
    return parseInt(priceString.replace(/[$,]/g, ""));
  };

  const initialPrice = parsePrice(propertyPrice);

  const [homePrice, setHomePrice] = useState(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.0);
  const [loanTerm, setLoanTerm] = useState(30);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [downPaymentAmount, setDownPaymentAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);

  // Update home price when property price changes
  useEffect(() => {
    setHomePrice(initialPrice);
  }, [propertyPrice]);

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPaymentPercent, interestRate, loanTerm]);

  const calculateMortgage = () => {
    const downPayment = (homePrice * downPaymentPercent) / 100;
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setDownPaymentAmount(downPayment);
      setLoanAmount(principal);
    } else {
      const payment =
        principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      setMonthlyPayment(payment);
      setDownPaymentAmount(downPayment);
      setLoanAmount(principal);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="dark:bg-darkmode py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl p-8 shadow-xl" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Estimate Your Monthly Payment
            </h3>
            <p className="text-white/90 text-lg">
              See what your mortgage payment could be for this property
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <div className="space-y-6">
              {/* Home Price */}
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Home Price
                </label>
                <p className="text-white text-2xl font-bold mb-1">
                  {formatCurrency(homePrice)}
                </p>
                <p className="text-white/70 text-sm">Based on listing price</p>
              </div>

              {/* Down Payment */}
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Down Payment: {downPaymentPercent}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-white/70 mt-2">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg text-midnight_text font-semibold focus:outline-none focus:ring-2 focus:ring-cyan text-lg"
                />
              </div>

              {/* Loan Term */}
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Loan Term
                </label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg text-midnight_text font-semibold focus:outline-none focus:ring-2 focus:ring-cyan text-lg"
                >
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={25}>25 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-gray text-sm mb-2">Estimated Monthly Payment</p>
                <p className="text-4xl font-bold text-primary mb-1">
                  {formatCurrency(monthlyPayment)}
                </p>
                <p className="text-gray text-sm">Principal & Interest</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-white/70 text-xs mb-1">Down Payment</p>
                  <p className="text-white font-bold text-lg">
                    {formatCurrency(downPaymentAmount)}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-white/70 text-xs mb-1">Loan Amount</p>
                  <p className="text-white font-bold text-lg">
                    {formatCurrency(loanAmount)}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-white text-primary text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Pre-Qualified
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              * This calculator provides estimates only. Actual monthly payments may vary. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
