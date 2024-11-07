package Arquitetura-MVC;

public class Aluno {
    private String nome;
    private int id;
    private double[] notas;
    private int totalAulas;
    private int aulasAssistidas;

    public Aluno(String nome, int id, double[] notas, int totalAulas, int aulasAssistidas) {
        this.nome = nome;
        this.id = id;
        this.notas = notas;
        this.totalAulas = totalAulas;
        this.aulasAssistidas = aulasAssistidas;
    }

    public String getNome() { return nome; }
    public int getId() { return id; }
    public double[] getNotas() { return notas; }
    public int getTotalAulas() { return totalAulas; }
    public int getAulasAssistidas() { return aulasAssistidas; }
}
