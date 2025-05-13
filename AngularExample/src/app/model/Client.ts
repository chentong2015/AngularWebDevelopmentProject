// Create module interface
// 创建好interface之后需要重启Server
export interface Client {
    firstname: string, // this is required
    lastname: string,
    age?: number,      // this variable is optional
    address?: {
        street?: string,
        rue?: string,
        number?: number
    },
    image?: string,
    isActive?: boolean,
    balance?: number,
    registered?: any
}