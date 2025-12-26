import React from 'react';
import Hero from '../../components/Hero';

const BolpurAdmissionsPage = () => {
  return (
    <div className="admissions-page">
      <Hero image="/pictures/hero_section/banner-tigps-1.webp" alt="TIGPS Admissions" />
      
      {/* Criteria Section */}
      <section style={{padding: '40px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>

          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Admission Overview</h2>

          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
            <p>TIGPS Bolpur provides opportunities to keen learners of all nationalities for admission to the school.</p>
            <p>The registration process can be completed through both online and offline modes. For offline registration, the prospectus and registration form can be collected from the school office upon payment of the registration fee. The online registration form is available on the school website.</p>
            <p>Admission will be granted based on the merit of the child and the results of the entrance examination. The date of the examination is to be announced in advance.</p>
            <p>The orientation program is an important occasion at TIGPS Bolpur. The program offers parents and students the opportunity to understand the vision of TIGPS schools. The event also acts as an interactive session for parents where they are introduced to the teachers and administrative staff. This allows them to gain a deep understanding of the operating principle of the organization as well as the daily lives of their students in years to come. They can also contact the front desk for Transport Form, in case they want information on availing school transport.</p>      
          </p>



      
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Criteria</h2>
          
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
            For admission in the academic session 2024-25, the class-wise age criteria are as mentioned below:
          </p>
          
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
            <table style={{backgroundColor: 'white', color: '#333', borderRadius: '10px', overflow: 'hidden', fontFamily: 'Lora', border: '2px solid rgb(100, 19, 32)', borderCollapse: 'collapse', maxWidth: '600px'}}>
              <thead>
                <tr style={{backgroundColor: '#f8f9fa'}}>
                  <th style={{padding: '15px', textAlign: 'center', fontWeight: '600', border: '1px solid #ddd', fontSize: '1.1rem', color: 'rgb(100, 19, 32)'}}>Class</th>
                  <th style={{padding: '15px', textAlign: 'center', fontWeight: '600', border: '1px solid #ddd', fontSize: '1.1rem', color: 'rgb(100, 19, 32)'}}>Age Group</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>PlayGroup</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>3 yrs</td>
                </tr>
                <tr style={{backgroundColor: '#f9f9f9'}}>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Nursery</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>4 yrs</td>
                </tr>
                <tr>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>KG</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>5 yrs</td>
                </tr>
                <tr style={{backgroundColor: '#f9f9f9'}}>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Class I</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>6 yrs</td>
                </tr>
                <tr>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Class II</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>7 yrs</td>
                </tr>




                 <tr style={{backgroundColor: '#f9f9f9'}}>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>Class III</td>
                  <td style={{padding: '12px 15px', textAlign: 'center', border: '1px solid #ddd', fontSize: '1rem'}}>8 yrs</td>
                </tr>
              
              </tbody>
            </table>
          </div>
          
          <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#666', fontFamily: 'Lora', textAlign: 'center', marginBottom: '10px'}}>
            This order will be followed for rest of the Classes i.e III to X.
          </p>
          <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#666', fontFamily: 'Lora', textAlign: 'center'}}>
            As per board norms, the eligibility of a candidate to a particular class will be based on the age of the candidate as on 31st March. The minimum age for higher classes will subsequently increase by one year for every class.
          </p>
        </div>
      </section>
      
      {/* Admission Application Procedure Section */}
      <section style={{padding: '40px 20px', background: '#f8f9fa'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Admission Application Procedure</h2>
          
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
            The registration form may be submitted either (a) manually or (b) online. Registration form can either be filled up online from the school website: www.tigps.in or can be collected from the school office (For Selected School only).
          </p>
          
          <div className="row" style={{marginBottom: '30px'}}>
            <div className="col-md-6 mb-3">
              <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '100%'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>For (a) Manual Submission</h4>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>  The registration form can be collected from the school office upon payment of registration fees. The form needs to be filled up manually and submitted at the school office. On receiving the properly filled-up form, each applicant is provided an Admit Card with the date of interaction/ observation.  {/*The registration form will be available at the school office on payment of registration fee. The form has to be filled up manually and submitted to the school office. Admit Card would be given from school mentioning the date of interaction/observation.*/}</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '100%'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>For (b) Online Submission</h4>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>  The registration form can also be submitted online using the application form available at the official website of the school (www.tigps.in). The form is required to be filled up virtually and upon submission, the date of interaction/ observation will be informed to the applicants on their registered mobile number and email ID. Registration fee is required to be paid on the day of interaction/ observation. Our executive counselor will revert to the applicant on their registered mobile number for intimation of future processes.{/*The registration form can also be submitted online (For Selected School only). An admit card would be processed and delivered online instantly. Registration fee must be paid on the day of Interaction/Observation.*/}</p>
              </div>
            </div>
          </div>
          

          {/* Documentation Required Section */}
<section style={{ padding: "40px 20px", background: "#f8f9fa" }}>
  <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

    <h2
      style={{
        fontSize: "2.3rem",
        fontWeight: "700",
        color: "rgb(100, 19, 32)",
        marginBottom: "25px",
        fontFamily: "Lora",
      }}
    >
      Documentation Required for Registration
    </h2>

    <p style={{ fontSize: "1rem", color: "#333", fontWeight: "bold",fontFamily: "Lora", marginBottom: "15px" }}>
      The following documents need to be presented during the time of registration:
    </p>

    <ul style={{ paddingLeft: "20px", marginBottom: "25px", fontFamily: "Lora", color: "#333" }}>
      <li>A photocopy of the Birth Certificate from Kolkata Municipal Corporation/ Municipality/ Registrar attested by any Gazetted Officer. An affidavit or other evidence and photocopy of an attested birth certificate are not acceptable.</li>
      <li>A photocopy of a Report Card from the school last attended. (Not applicable for Play Group, Nursery and KG).</li>
      <li>One stamp-size photograph of the applicant.</li>
    </ul>
 <p style={{ fontSize: "1rem", color: "#333", fontFamily: "Lora", marginBottom: "15px" }}>
      Candidates submitting their form online are required to hand over the above documents on the day of the interaction/observation.
 </p>
    <p style={{ fontSize: "1rem", color: "#333", fontFamily: "Lora", marginBottom: "15px" }}>
      The final list of selected candidates for any particular class will be displayed on the School Notice Board and the school website.
    </p>

    <p style={{ fontSize: "1rem", color: "#333", fontWeight: "bold", fontFamily: "Lora", marginBottom: "20px" }}>
      The following formalities need to be completed by the selected candidates within a stipulated time period.
    </p>

    <ul style={{ paddingLeft: "20px", marginBottom: "25px", fontFamily: "Lora", color: "#333" }}>
      <li>Each parent of the candidate is required to sign the admission form.</li>
      <li>Payment of the fees must be completed within the due date in cash or demand draft.</li>
      <li>The original Birth Certificate will have to be presented for verification at the time of admission.</li>
      <li>Four coloured passport size photographs of the student and one each for both the parents (size 3.5cm × 2.5cm).</li>
      <li>Transfer Certificate from the school last attended has to be submitted (not applicable for Play Group to class I).</li>
      <li>From class VIII onwards, TC should be counter-signed by the District Education Officer/ Regional Officer for transferred students.</li>
      </ul>

    <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "rgb(100, 19, 32)",
        marginBottom: "15px",
        fontFamily: "Lora",
      }}
    >
      Refund of Fees
    </h3>

    <ul style={{ paddingLeft: "20px", fontFamily: "Lora", color: "#333" }}>
      <li>The admission fee is non-refundable under any circumstance.</li>
      <li>
       The security deposit might be refundable under the condition that a written intimation is provided to the school authority within the stipulated time period (30 days from the date of admission and prior to the commencement of normal classes). Only students admitted with all relevant documents will be eligible for a refund of the security deposit. </li>
      <li>
        However, no security deposit would be refunded to students withdrawing his or her admission fee without submitting a written intimation to the school authority within the stipulated time period, mentioned above.</li>
      <li>No outstanding dues to the school will be adjusted against the security deposit.</li>
     </ul>
     
     
     
     <p style={{ fontSize: "1rem", color: "#333", fontWeight: "bold", fontFamily: "Lora", marginBottom: "20px" }}>
     Withdrawal policy:
    </p> 
    <p>
                        Students applying for a Transfer Certificate halfway through the academic term would be liable to fee payment for the entire academic year.
      </p>
    

  </div>
</section>

          <div style={{textAlign: 'center'}}>
            <img src="/pictures/admission/admission-open.png" alt="Admission Open" style={{maxWidth: '600px', width: '100%', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)'}}/>
          </div>
        </div>
      </section>
      

      
      {/* Application Form Section */}
      <section style={{padding: '40px 20px', background: 'white'}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Application Form</h2>
          
          <div style={{background: '#f8f9fa', padding: '40px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Admission Enquiry 2026-27</h3>
            
            <form>
              <div style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Enter Parent name *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Enter Student Name *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="email" placeholder="Enter Email *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="tel" placeholder="Enter Contact No *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Enter Class *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{marginBottom: '30px'}}>
                <input type="text" placeholder="Enter City Name *" style={{width: '100%', padding: '12px', border: '2px solid rgb(100, 19, 32)', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', color: 'rgb(100, 19, 32)'}} />
              </div>
              
              <div style={{textAlign: 'center'}}>
                <button type="submit" style={{background: 'rgb(100, 19, 32)', color: 'white', border: 'none', padding: '12px 40px', borderRadius: '5px', fontSize: '1rem', fontFamily: 'Lora', cursor: 'pointer'}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BolpurAdmissionsPage;