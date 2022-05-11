
export interface Predict
{
    team_1?: string ;
    team_2? : string ;
}

export class Predict
{
    team_1?: string ;
    team_2? : string ;



    constructor(team_1:string,team_2:string) {
        this.team_1 = team_1;
        this.team_2 = team_2;

      }

}
