
export interface Role
{
    id?: number ;
    name : string ;
}

export class Role
{
    id?: number ;
    name : string ;



    constructor(name: string) {
        this.name = name;
      }

}
