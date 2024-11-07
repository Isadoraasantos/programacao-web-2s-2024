package Arquitetura-MVC;

public class Main {
    public static void main(String[] args) {
      
        double[] notas = {8.5, 9.0, 7.5, 8.0};
        Aluno aluno = new Aluno("Maria Silva", 12345, notas, 40, 36);

       
        GestaoAcademica gestaoAcademica = new GestaoAcademica();
        alunoview alunoView = new AlunoView();
        alunoController alunoController = new AlunoController(aluno, gestaoAcademica, alunoView);

        
        alunoController.atualizarView();
    }
}
