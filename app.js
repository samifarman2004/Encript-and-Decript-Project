const key = CryptoJS.enc.Utf8.parse('1234567890123456');
const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); 

function encryptText() {
    const inputText = document.getElementById('encryptText').value;
    if (inputText) {
        const encrypted = CryptoJS.AES.encrypt(inputText, key, { iv: iv }).toString();
        document.getElementById('encryptResult').innerText = encrypted;
    } else {
        alert('Please enter text to encrypt.');
    }
}

function decryptText() {
    const inputText = document.getElementById('decryptText').value;
    if (inputText) {
        try {
            const decrypted = CryptoJS.AES.decrypt(inputText, key, { iv: iv });
            const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
            if (decryptedText) {
                document.getElementById('decryptResult').innerText = decryptedText;
            } else {
                alert('Invalid encrypted text.');
            }
        } catch (e) {
            alert('Invalid encrypted text.');
        }
    } else {
        alert('Please enter text to decrypt.');
    }
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    if (text) {
        navigator.clipboard.writeText(text)
    } else {
        alert('Nothing to copy');
    }
}