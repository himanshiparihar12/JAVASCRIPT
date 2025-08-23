// Filter hospital equipment that needs maintenance.
const equipment = [
  { id: 1, name: "ECG Machine", needsMaintenance: true },
  { id: 2, name: "Ventilator", needsMaintenance: false },
  { id: 3, name: "Suction Pump", needsMaintenance: true },
  { id: 4, name: "Ultrasound", needsMaintenance: false }
];

const maintenanceNeeded = equipment.filter(item => item.needsMaintenance);
console.log(maintenanceNeeded);