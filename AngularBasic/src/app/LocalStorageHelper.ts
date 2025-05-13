// import { AES } from "crypto-ts";
import sha256 from "crypto-js/sha256"; // HASH 

export class LocalStorageHelper {

    static value: any;

    static checkLoginInfo(username: string, password: string) {
      return sha256(username + password) == this.getEncryptedString(username);
    }

    static getEncryptedString(username: string) {
       this.value = localStorage.getItem(username);
       return (this.value == null) ? "": this.value.toString();
    }

    static addLoginInfo(username: string, password: string) {
      localStorage.setItem(username, sha256(username + password).toString());
    }
}