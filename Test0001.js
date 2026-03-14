let n = 5;
Upper part
for (let i = 1; i <= n; i++) {
    for (let j = i; j < n; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}
for (let i = n - 1; i >= 1; i--) {

    for (let j = n; j > i; j--) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}
