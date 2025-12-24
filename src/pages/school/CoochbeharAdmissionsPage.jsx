import React from 'react';
import Hero from '../../components/Hero';

const CoochbeharAdmissionsPage = () => {
  return (
    <div className="admissions-page">
      <Hero image="/pictures/coochbehar/coochbehar-banner.jpg" alt="TIGPS Admissions" />

      {/* Overview Section */}
      <section style={{padding: '40px 20px', background: '#f8f9fa'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Overview</h2>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>Students of all nationalities are eligible for admission to Techno India Group Public Schools as long as the schools can meet their needs.</p>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>The prospectus and registration form will be available at the school office on payment of registration fee. The registration form can also be submitted online using online application form available in the website. After successful online submission our executive counselor will call on the registered mobile number for intimation of further proceedings. Once the registration process is completed successfully, the student is assigned a unique Application ID.</p>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>The date of the entrance examination and the date for admission results are announced in advance.</p>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>Admission is granted strictly on the basis of the merit of the child. Admission is purely on academic grounds. Any effort to influence the school in this regard in any form will disqualify the candidate.</p>
          <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>The Orientation Program is a very important occasion for us. It is a wonderful opportunity to know each other and to be able to appreciate the vision with which our school has been initiated. An ice-breaking session, this shall be a platform where the children and the parents would be formally inducted as a members of the TIGPS family. Parents interact with the teachers, the office staff and with all the people who would be instrumental in shaping the lives of the children admitted to our school in the years to come. Besides interaction with the applicants, the schools conduct an interaction session with the parents too. If the parents wish to avail the school transport, the Transport Form will also have to be submitted at the school desk.</p>
        </div>
      </section>
      
      {/* Criteria Section */}
      <section style={{padding: '40px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
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
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>The registration form will be available at the school office on payment of registration fee. The form has to be filled up manually and submitted to the school office. Admit Card would be given from school mentioning the date of interaction/ observation.</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div style={{background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid rgb(100, 19, 32)', height: '100%'}}>
                <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora'}}>For (b) Online Submission</h4>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#333', fontFamily: 'Lora', marginBottom: '0'}}>The registration form can also be submitted online using online application form available in the website (www.tigps.in). After successful online submission our executive counsellor will call on the registered mobile number for intimation of further proceedings. Once the registration process is completed successfully, the student is assigned a unique Application ID.</p>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
              Registration fee must be paid on the day of Interaction/Observation.

Students who have submitted the form online must pay the registration fee on the day of the interaction/observation.

The date of interaction/observation will be informed to the guardian through your registered mobile number and email ID.

Please mention the online user ID for all future correspondence.

Mere allotment of a user ID to an applicant will not ensure admission. Admission will depend on the selection process.

Admission is granted strictly on the basis of the merit of the child.

Admission is purely on academic grounds. Any effort to influence the school in this regard in any form will disqualify the candidate.
          </p>
          
        <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Documents Required</h4>
        <ul style={{ paddingLeft: '20px', marginBottom: '25px' }}>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora', marginBottom: '10px' }}>
            A photocopy of the Birth Certificate from Kolkata Municipal Corporation / Municipality / Registrar should be attested by any Gazetted Officer. Affidavits or other evidence are not acceptable. No photocopy of the attested birth certificate is acceptable.
          </li>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora', marginBottom: '10px' }}>
            A photocopy of the Report Card from the school last attended. (Not applicable for Play Group, Nursery and KG).
          </li>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora' }}>
            One stamp size photograph of the child.
          </li>
        </ul>
        <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
          Candidates who submit their form online are required to hand over the above documents on the day of the interaction/observation.
        </p>
        <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
          There will be no formal interview for the infant children. They will be observed only through the way method in a group.

The final selection list for admission into a particular class will be displayed on the School Notice Board and on the school website.

Selected candidates will have to complete all the formalities given below within a stipulated time period.

The admission form must be filled up completely and signed by both the parents. Fees must be paid within the due date in cash or demand draft. The original Birth Certificate will have to be presented for verification at the time of admission.

Four coloured passport size photographs of the student and one each for both the parents (size 3.5cm X 2.5cm) will have to be submitted.

Submission of Transfer Certificate from the school last attended (not applicable for Play Group to class I).

From class VIII onwards TC should be counter signed by the District Education Officer/ Regional Officer for outstation students.
        </p>
        <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Refund of Fees</h4>
        <ul style={{ paddingLeft: '20px', marginBottom: '25px' }}>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora', marginBottom: '10px' }}>
            Admission fees will not be refunded under any circumstances.
          </li>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora', marginBottom: '10px' }}>
            Only intimation in writing within 30 days from the date of admission, but not after the commencement of the class in which the student is being admitted, along with all relevant documents acceptable to the management, will be considered for refund of the security fees only. No other fees will be refunded.
          </li>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora', marginBottom: '10px' }}>
            If a student withdraws his or her admission without written intimation to the school authority after the stipulated period (within 30 days from the date of admission but not after the commencement of the class), no security deposit will be refunded.
          </li>
          <li style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333', fontFamily: 'Lora' }}>
            Under no circumstances will any dues payable to the school be adjusted against the security deposit.
          </li>
        </ul>
        <h4 style={{fontSize: '1.3rem', fontWeight: '600', color: 'rgb(100, 19, 32)', marginBottom: '15px', fontFamily: 'Lora', textAlign: 'center'}}>Withdrawal Policy</h4>
        <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#333', marginBottom: '25px', fontFamily: 'Lora'}}>
          Those who take Transfer Certificate in middle of the academic year are liable to pay the fees for the remaining months of the entire academic year.
        </p>



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

export default CoochbeharAdmissionsPage;