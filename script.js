function generatePasswords() {
    const chars = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "<", ">", "?"
    ];
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < 15; i++) {
        password1 += chars[Math.floor(Math.random() * chars.length)];
        password2 += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("password1").textContent = password1;
    document.getElementById("password2").textContent = password2;
}