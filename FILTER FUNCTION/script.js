const shipments = ['SHIP001', 'SHIP002'];

const urls = shipments.map(id => `/track/${id}`);

console.log(urls);ṇ