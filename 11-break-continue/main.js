const places = [3, 0, 2, -1, 5];

for (const nombre of places) {
    if (nombre === 0) continue;
    if (nombre < 0) break;
    console.log(nombre)
}