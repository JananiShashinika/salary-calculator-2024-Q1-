import React,{useState } from 'react';
import './CalculateForm.css';
import PaySheet from './PaySheet';

export default function CalculateForm() {
    const [basicSalary, setBasicSalary] = useState(); 
    const [earnings, setEarnings] = useState([{ title: '', amount: '', epfApplicable: false }]);
    const [deductions, setDeductions] = useState([{ title: '', amount: '' }]);
    const [results, setResults] = useState(null);


    const handleEarningChange = (index,event) => {
        const newEarnings = earnings.map((earning,i) =>{
            if(i === index) {
                return { ...earning, [event.target.name]: event.target.value};
            }
            return earning;
            });
            setEarnings(newEarnings);
        };

        const handleDeductionChange = (index, event) => {
            const newDeductions = deductions.map((deduction, i) => {
              if (i === index) {
                return { ...deduction, [event.target.name]: event.target.value };
              }
              return deduction;
            });
            setDeductions(newDeductions);
          };

          const addEarning = () => {
            setEarnings([...earnings,{ title:'',amount:'', epfApplicable:false}]);
          };

          const addDeduction = () => {
            setDeductions([...deductions, { title: '', amount: '' }]);
          };

          const calculateTotalEarnings = (basicSalary, earnings) => {
            return basicSalary + earnings.reduce((total, earning) => total + earning.amount, 0);
          };
          
          const calculateTotalEarningsForEPF = (basicSalary, earnings) => {
            return basicSalary + earnings.filter(earning => earning.epfApplicable).reduce((total, earning) => total + earning.amount, 0);
          };
          
          const calculateGrossDeduction = (deductions) => {
            return deductions.reduce((total, deduction) => total + parseFloat(deduction.amount || 0), 0);
          };
          
          const calculateGrossEarnings = (totalEarnings, grossDeduction) => {
            return totalEarnings - grossDeduction;
          };
          
          const calculateGrossSalaryForEPF = (totalEarningsForEPF, grossDeduction) => {
            return totalEarningsForEPF - grossDeduction;
          };
          
          const calculateEmployeeEPF = (grossSalaryForEPF) => {
            return grossSalaryForEPF * 0.08;
          };
          
          const calculateEmployerEPF = (grossSalaryForEPF) => {
            return grossSalaryForEPF * 0.12;
          };
          
          const calculateEmployerETF = (grossSalaryForEPF) => {
            return grossSalaryForEPF * 0.03;
          };
          
          const calculateAPIT = (grossEarnings) => {
            return (grossEarnings * 0.18) - 25500;
          };
          
          const calculateNetSalary = (grossEarnings, employeeEPF, apit) => {
            return grossEarnings - employeeEPF - apit;
          };
          
          const calculateCTC = (grossEarnings, employerEPF, employerETF) => {
            return grossEarnings + employerEPF + employerETF;
          };
          
          const handleSubmit = (event) => {
            event.preventDefault();
            // Perform calculations
            const totalEarnings = calculateTotalEarnings(parseFloat(basicSalary), earnings);
            const totalEarningsForEPF = calculateTotalEarningsForEPF(parseFloat(basicSalary), earnings);
            const grossDeduction = calculateGrossDeduction(deductions);
            const grossEarnings = calculateGrossEarnings(totalEarnings, grossDeduction);
            const grossSalaryForEPF = calculateGrossSalaryForEPF(totalEarningsForEPF, grossDeduction);
            const employeeEPF = calculateEmployeeEPF(grossSalaryForEPF);
            const employerEPF = calculateEmployerEPF(grossSalaryForEPF);
            const employerETF = calculateEmployerETF(grossSalaryForEPF);
            const apit = calculateAPIT(grossEarnings);
            const netSalary = calculateNetSalary(grossEarnings, employeeEPF, apit);
            const ctc = calculateCTC(grossEarnings, employerEPF, employerETF);

            setResults({
              basicSalary,grossEarnings,grossDeduction,employeeEPF,apit,netSalary,employerEPF,employerETF,ctc
            });
          };
          



    return(
        <form className='form-input' onSubmit={handleSubmit}>
          <br/>

        <div className="basic">
        <label>Basic Salary</label>
        <input  type='text' value={basicSalary} onChange={(e) =>setBasicSalary(e.target.value)}/>
        </div>

<br/>
        <div>
          <div className='earnings'>
            <label >Earnings</label>
            <p>Allowance, Fixed Allowance, Bonus and etc..</p>
          </div>

          <div className='earnings-input'>
        {/* <input type="text" value={travel} onChange={(e) => setTravel(e.target.value)} placeholder='Travel'/>
        <input type="number" name="amount"/>
        <button  >X</button>
        <button type="checkbox" ></button>
        <label>EPF/ETF</label> */}
      
            {earnings.map((earning,index) =>(
                <div className='earnings-input' key={index}>
                    <input type="text" name="title" value={earning.title} onChange={(event) => handleEarningChange(index, event)} placeholder="Pay Details (Title)"/>
                    <input type="number" name="amount" value={earning.amount}  onChange={(event) => handleEarningChange(index, event)} placeholder="Amount"/>  
                    <button type="close">X</button> 
                    <label>
                      <input type="checkbox"/>
                    EPF/ETF
                    </label>
                </div>  
                ))}
                </div>
                <br/>
           <button className='button' type="link" onClick={addEarning}>+ Add New Allowance </button>
        </div>
        
      <br/>

      {/* <div>
        <label>EPF/ETF</label> */}
        {/* <p>Pay Details (Title)</p>
        <input type="text" placeholder="Title" /> */}
        {/* <input type="number" placeholder="Amount" /> */}
      {/* </div> */}

      <div >
        <div className='deductions'>
        <label>Deductions</label>
        <p>Salary Advances, Loan Deductions and all</p>
        </div>

       
        {deductions.map((deduction,index) => (
            <div className='deductions-input' key={index}>
                <input type="text" name="title" value={deduction.title} onChange={(event) => handleDeductionChange(index,event)} placeholder="No Pay" />
                <input type="number" name="amount" value={deduction.amount} onChange={(event) => handleDeductionChange(index,event)} placeholder="Amount" />
                <button type="button" onClick={() => setDeductions(deductions.filter((_, i) => i !== index))}>X</button>
            </div>
        ))}
        <br/>
        <button className='button' type="link" onClick={addDeduction}>+ Add New Deduction</button>  
      </div>

      {/* <div>
        <label>No Pay</label>
        <input type="number" value={noPay} onChange={(e) => setNoPay(e.target.value)}/>
      </div> */}

      {/* <button type="submit">Calculate</button> */}
      </form>        
    );
}