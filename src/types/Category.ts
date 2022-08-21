export type Category = {
    [tag: string]: {
        title: string,
        color:string,
        expense:boolean,
    }

    // using tag string so theres no need to repeat the same thing for food rent and salary, so any string will have the structure above , tag could be any name
}