import { Romanos } from "./romanos";

test('Testando', () => {
    expect(2+2).toBe(4)


})

//Entrando na Exceção
test('-1 = Error', () => {
    //Arrange
    const sut = new Romanos();
    //Act
    const retorno = () => {sut.convert(-1) };
    //Assert
    expect(retorno).toThrow(new Error("Erro"));

})

test('1 = I', () => {
    //Arrange
    const sut = new Romanos();
    //Act
    const retorno = sut.convert(1);
    //Assert
    expect(retorno).toEqual("I");

})

test('5 = V', () => {
    //Arrange
    const sut = new Romanos();
    //Act
    const retorno = sut.convert(5);
    //Assert
    expect(retorno).toEqual("V");

})

test('10 = X', () => {
    //Arrange
    const sut = new Romanos();
    //Act
    const retorno = sut.convert(10);
    //Assert
    expect(retorno).toEqual("X");

})

test('50 = L', () => {
    //Arrange
    const sut = new Romanos();
    //Act
    const retorno = sut.convert(50);
    //Assert
    expect(retorno).toEqual("L");

})



