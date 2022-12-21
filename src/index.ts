

class ListadoComponente{

    heroes: string[] = ['1','2','3','4'];
    borrado: string 

    borrarHeroe(){
        this.borrado = this.heroes.shift();
    }

}