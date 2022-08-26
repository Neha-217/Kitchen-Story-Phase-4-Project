export class Products{
    static forEach(arg0: (value: any, index: any) => void) {
      throw new Error('Method not implemented.');
    }
    static id: any;
    static splice: any;
    
    id!:number;
    price!:number;
    name!:string;
    cookTime!:string;
    origins!:string[];
    tags?:string[];
 
    

}