package Arquitetura-MVC;

public class alunoview {
    public void exibirDadosAluno(String nome, int id, double media, double frequencia) {
        System.out.println("Aluno: " + nome);
        System.out.println("ID: " + id);
        System.out.printf("Média das Notas: %.2f\n", media);
        System.out.printf("Frequência: %.2f%%\n", frequencia);
        System.out.println();
    }
}

