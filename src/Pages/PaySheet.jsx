import React,{useState } from 'react';
import './PaySheet.css';
import './CalculateForm';

export default function PaySheet() {
    // const [basicSalary] = useState();
    return(
        <div className='h4 paySheet'>Your Salary
        <table className='table'>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                        <td>Basic Salary</td>
                        <td>{results.basicSalary}</td>
                    </tr>
                    <tr>
                        <td>Gross Earnings</td>
                        <td>{results.grossEarnings}</td>
                    </tr>
                    <tr>
                        <td>Gross Deduction</td>
                        <td>{results.grossDeduction}</td>
                    </tr>
                    <tr>
                        <td>Employee EPF (8%)</td>
                        <td>{results.employeeEPF}</td>
                    </tr>
                    <tr>
                        <td>APIT</td>
                        <td>{results.apit}</td>
                    </tr>
                    <tr className='netSalary'>
                        <td>Net Salary (Take Home)</td>
                        <td>{results.netSalary}</td>
                    </tr>
                </tbody>
            </table>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Contribution from the Employer</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Employer EPF (12%)</td>
                        <td>{results.employerEPF}</td>
                    </tr>
                    <tr>
                        <td>Employer ETF (3%)</td>
                        <td>{results.employerETF}</td>
                    </tr>
                    <tr>
                        <td>CTC (Cost to Company)</td>
                        <td>{results.ctc}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}