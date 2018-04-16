export class Personne {
  nom : string;
  prenom : string;
  age : number;
  path : string;


  constructor(nom: string, prenom: string, age: number, path: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.path = path;
  }
}
