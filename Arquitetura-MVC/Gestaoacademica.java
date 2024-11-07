package Arquitetura-MVC;

public class GestaoAcademica {
    public double calcularMedia(double[] notas) {
        double soma = 0;
        for (double nota : notas) {
            soma += nota;
        }
        return soma / notas.length;
    }

    public double calcularFrequencia(int aulasAssistidas, int totalAulas) {
        return (double) aulasAssistidas / totalAulas * 100;
    }
}
