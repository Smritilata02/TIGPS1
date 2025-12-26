import React from 'react';
import Hero from '../../components/Hero';

const FalakataAdmissionsPage = () => {
  return (
    <div className="admissions-page">
      <Hero image="/pictures/image.jpg" alt="TIGPS Admissions" />
      
      {/* Criteria Section */}
      <section style={{padding: '40px 20px', background: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>

          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: 'rgb(100, 19, 32)', textAlign: 'center', marginBottom: '30px', fontFamily: 'Lora'}}>Admission Overview</h2>

          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '30px', fontFamily: 'Lora', textAlign: 'center'}}>
            TIGPS Falakata offers admission through both online and offline modes.

            Techno India Group Public School Falakata is dedicated to providing quality education to young learners of all nationalities.

            The application form and prospectus can be collected from the school office on payment of the registration fee.

            For online admission, the application form can be filled and submitted on the official website of the school.

            Our executive counselor will reach out to the respective applicants for follow up processes upon successful completion of the registration process. Thereafter, the students will be assigned an Application ID.

            Final admission will be granted on the basis of the merit of the child and results of the Entrance Examination. Date for the entrance examination will be announced on the school website in advance. Based on the final results of the entrance examination and the decisions of the school, admission will be finalised.

            An orientation programme will be conducted for parents and the students to introduce them to the working model of TIGPS schools. The programme will help families to get a close insight on the approach of the school towards education and student life. The orientation programme will also act as a platform for parents to directly interact with the school officials and teachers, providing a comprehensive overview of the daily life of the students after admission. The parents can also contact the school desk for information on transport facilities of the school and the Transport Form for enrollment.

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
<section style={{ padding: "40px 20px", background: "#f8f9fa" }}>
  <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
    
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        color: "rgb(100, 19, 32)",
        textAlign: "center",
        marginBottom: "30px",
        fontFamily: "Lora",
      }}
    >
      Admission Application Procedure
    </h2>

    <p
      style={{
        fontSize: "1rem",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "30px",
        fontFamily: "Lora",
      }}
    >
      The registration form may be submitted either: <b>Manually OR Online</b>.
      <br /><br />
      TIGPS Falakata offers both manual and online registration. The detailed processes are as follows.
    </p>

    {/* Manual Submission Card */}
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        border: "2px solid rgb(100, 19, 32)",
        marginBottom: "30px",
      }}
    >
      <h4
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "rgb(100, 19, 32)",
          marginBottom: "15px",
          fontFamily: "Lora",
        }}
      >
        For (a) Manual Submission
      </h4>

      <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333", fontFamily: "Lora" }}>
        The manual registration form for TIGPS Falakata is available at the school office.
        The form can be collected on payment of a substantial registration fee.
        After complete form fill-up, it is to be submitted to the school office.
        After submission, an admit card will be provided to the applicant from the school
        with information on the date of interaction / observation.
      </p>
    </div>

    {/* Online Submission Card */}
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        border: "2px solid rgb(100, 19, 32)",
        marginBottom: "30px",
      }}
    >
      <h4
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "rgb(100, 19, 32)",
          marginBottom: "15px",
          fontFamily: "Lora",
        }}
      >
        For (b) Online Submission
      </h4>

      <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333", fontFamily: "Lora" }}>
        The online registration form is available online at the official website of the school
        (<b>www.tigps.in</b>). On successful fill-up of the online registration form,
        each applicant would be assigned an online user ID, which needs to be mentioned
        for all future correspondence.
        <br /><br />
        The registration fees must be paid on the day of interaction / observation.
        The date of interaction / observation will be informed to the guardian of the applicant
        through the registered mobile number and email ID.
        <br /><br />
        Mere allotment of a user ID would not ensure admission.
        Admission will depend upon the merit of the applicant and the results of Entrance
        examination. The decision of the school regarding admission will be considered final.
      </p>
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

    <p style={{ fontSize: "1rem", color: "#333", fontFamily: "Lora", marginBottom: "15px" }}>
      The following documents are necessary during the time of registration:
    </p>

    <ul style={{ paddingLeft: "20px", marginBottom: "25px", fontFamily: "Lora", color: "#333" }}>
      <li>A photocopy of Birth Certificate from Kolkata Municipal Corporation / Municipality / Registrar attested by any Gazetted Officer. Affidavit or photocopy of attested birth certificate is not acceptable.</li>
      <li>A photocopy of a Report Card from the school last attended (not applicable for Play Group, Nursery and KG).</li>
      <li>One stamp size photograph of the child.</li>
      <li>Candidates registering online are required to submit these documents on the day of interaction / observation.</li>
    </ul>

    <p style={{ fontSize: "1rem", color: "#333", fontFamily: "Lora", marginBottom: "15px" }}>
      The final list of selected students for each standard will be displayed on the notice board of the school and on the official website.
    </p>

    <p style={{ fontSize: "1rem", color: "#333", fontFamily: "Lora", marginBottom: "20px" }}>
      Selected candidates will have to complete all the formalities mentioned below within a stipulated time period.
    </p>

    <ul style={{ paddingLeft: "20px", marginBottom: "25px", fontFamily: "Lora", color: "#333" }}>
      <li>The admission form is required to be signed by both the parents.</li>
      <li>Fees must be paid within the due date in cash or demand draft.</li>
      <li>The original birth certificate of the applicant should be presented at the time of admission.</li>
    </ul>

    <p style={{ fontSize: "1rem", color: "#333", fontFamily: "Lora", marginBottom: "15px" }}>
      Important documents for admission include:
    </p>

    <ul style={{ paddingLeft: "20px", marginBottom: "25px", fontFamily: "Lora", color: "#333" }}>
      <li>Four coloured passport size photographs of the student and one each for both the parents (size 3.5cm × 2.5cm).</li>
      <li>Transfer Certificate (TC) from the school last attended (not applicable for Play Group to Class I).</li>
      <li>TC should be counter signed by the District Education Officer / Regional Officer for transfer students from Class VIII onwards.</li>
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
      <li>Admission fee is non-refundable under any circumstance.</li>
      <li>
        The security deposit might be refundable under condition that a written intimation is provided to the school authority within the stipulated time period (30 days from the date of admission and prior to commencement of normal classes). Only students admitted with all relevant documents will be eligible for a refund of the security deposit only.
      </li>
      <li>
        However, no security deposit would be refunded to students withdrawing his or her admission fee without submitting a written intimation to the school authority within the stipulated time period mentioned above.
      </li>
      <li>No outstanding dues to the school will be adjusted against the security deposit.</li>
      <li>
        Withdrawal policy: Students applying for a Transfer Certificate halfway through the academic term would be liable to fee payment for the entire academic year.
      </li>
    </ul>

  </div>
</section>

    {/* Image */}
    <div style={{ textAlign: "center" }}>
      <img
        src="/pictures/admission/admission-open.png"
        alt="Admission Open"
        style={{
          maxWidth: "600px",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      />
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

export default FalakataAdmissionsPage;