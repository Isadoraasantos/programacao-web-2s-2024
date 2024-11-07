package Arquitetura-MVC;

public class alunoController {
    private aluno aluno;
    private GestaoAcademica gestaoAcademica;
    private AlunoView alunoView;

    public AlunoController(aluno aluno, GestaoAcademica gestaoAcademica, AlunoView alunoView) {
        this.aluno = aluno;
        this.gestaoAcademica = gestaoAcademica;
        this.alunoView = alunoView;
    }

    public void atualizarView() {
        double media = gestaoAcademica.calcularMedia(aluno.getNotas());
        double frequencia = gestaoAcademica.calcularFrequencia(aluno.getAulasAssistidas(), aluno.getTotalAulas());
        alunoView.exibirDadosAluno(aluno.getNome(), aluno.getId(), media, frequencia);
    }
}

