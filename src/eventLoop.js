function print_f1() {
    console.log('f1');
}

function print_f2() {
    console.log('f2');
}

function print_main() {
    console.log('main');

    setTimeout(print_f1, 0);

    print_f2();
}

print_main();

