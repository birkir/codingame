const [h, m] = readline().split(':').map(Number);
const ha = (h / 12 * 360) + (m / 2);
const ma = m / 60 * 360;

print(Math.abs(ha - ma));
