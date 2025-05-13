// 定义每一个Question的数据结构
export interface Question {
    
    name: string,
    answers: string[],

    // 最后根据两者的对比，判断是否回答正确 => 对比之后做统计
    // 记录的是选择答案的坐标，对应的是ABCD
    answerId: number,
    selectedId: number
}