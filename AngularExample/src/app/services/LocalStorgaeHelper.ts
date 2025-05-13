// npm install crypto-ts
import { AES } from 'crypto-ts'; 

// Helper classes should only contain static functions or variable, 
// if not they are not different from services. 
export default class LocalStorageHelper {

    static value: any;
    
    // AES: 存储的时候加密，验证的时候解密 !!
    static checkItem(username: string, password: string) {
        console.log(username + password);
        console.log(this.getEncryptedString(username));
        console.log(AES.decrypt(this.getEncryptedString(username), "login").toString());
    
        return username + password == AES.decrypt(this.getEncryptedString(username), "login").toString();
    }

    static getEncryptedString(username: string): string {
        this.value = localStorage.getItem(username);
        return this.value == null ? "" : this.value.toString(); 
    }

    // AES: 对称加密(128 & 256)
    // 存储不是原始的用户密码，而是加密后的内容
    static saveItem(username: string, password: string) {
        this.value = AES.encrypt(username + password, 'login').toString();
        localStorage.setItem(username, this.value);
    }
}