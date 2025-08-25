// Filter doctors who offer online consultation.
const doctors = [
  { id: 1, name: "Dr. Tanya", onlineConsultation: true },
  { id: 2, name: "Dr. Imran", onlineConsultation: false },
  { id: 3, name: "Dr. Farah", onlineConsultation: true },
  { id: 4, name: "Dr. Kunal", onlineConsultation: false }
];
const onlineDoctors = doctors.filter(doc => doc.onlineConsultation);
console.log(onlineDoctors);
