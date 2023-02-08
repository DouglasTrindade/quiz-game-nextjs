import ModelAnswer from "../../model/answer";
import ModelQuestion from "../../model/question";

const questions: ModelQuestion[] = [
  new ModelQuestion(306, 'Qual o bicho transmite a doença de chagas?', [
    ModelAnswer.wrong('Abelha'),
    ModelAnswer.wrong('Barata'),
    ModelAnswer.wrong('Pulga'),
    ModelAnswer.such('Barbeiro')
  ]),
  new ModelQuestion(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
    ModelAnswer.wrong('Caju'),
    ModelAnswer.wrong('Côco'),
    ModelAnswer.wrong('Chuchu'),
    ModelAnswer.such('Abóbora')
  ]),
  new ModelQuestion(203, 'Qual é o coletivo de cães?', [
    ModelAnswer.wrong('Manada'),
    ModelAnswer.wrong('Alcateia'),
    ModelAnswer.wrong('Rebanho'),
    ModelAnswer.such('Matilha')
  ]),
  new ModelQuestion(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
    ModelAnswer.wrong('Equiátero'),
    ModelAnswer.wrong('Isóceles'),
    ModelAnswer.wrong('Trapézio'),
    ModelAnswer.such('Escaleno')
  ]),
]

export default questions