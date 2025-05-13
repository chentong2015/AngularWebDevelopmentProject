// npm install crypto-ts
import { AES } from 'crypto-ts'; 

// npm i --save-dev @types/crypto-js 必须使用这个来安装 
import sha256 from 'crypto-js/sha256';
import aess from 'crypto-js/aes';

// Helper classes should only contain static functions or variable, 
// if not they are not different from services. 
export default class LocalStorageHelper2 {

    static value: any;

    // AES: 存储的时候加密，验证的时候解密 !!
    static checkItem(username: string, password: string) {
    
        /* 
        sha256("value");
 
        var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

        // Decrypt
        var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');

        console.log(username + password);  // chentest
        console.log(this.getEncryptedString(username)); // 6368656e74657374
        console.log(AES.decrypt(this.getEncryptedString(username), "login").toString()); */

        console.log(this.getEncryptedString(username));
        console.log(sha256(username + password).toString());

        return sha256(username + password).toString() == this.getEncryptedString(username);
    }

    static getEncryptedString(username: string): string {
        this.value = localStorage.getItem(username);
        return this.value == null ? "" : this.value.toString(); 
    }

    // AES: 对称加密(128 & 256)
    // 存储不是原始的用户密码，而是加密后的内容
    static saveItem(username: string, password: string) {
        // this.value = AES.encrypt(username + password, 'login').toString();

        localStorage.setItem(username, sha256(username + password).toString());
    }
}