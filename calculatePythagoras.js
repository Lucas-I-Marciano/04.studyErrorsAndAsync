function calculateSquareRoot(radicand) {
  if (radicand < 0) {
    throw "Radicand needs to be positive";
  }
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  try {
    return calculateSquareRoot(side1 ** 2 + side2 ** 2);
  } catch (error) {
    // As I have calculateSquareRoot throwing an error, I can catch on a more external function
    console.log(error);
  }
}

const firstSideRef = document.getElementById("side-1");
const secondSideRef = document.getElementById("side-2");
const calculateButton = document.getElementById("calculate-hypotenuse");
const answerDiv = document.getElementById("answer");

function onCalculateButtonClick() {
  try {
    const firstSide = Number(firstSideRef.value);
    const secondSide = Number(secondSideRef.value);

    // I will put firstSide === 0 as an error because Number('') = 0
    if (
      firstSide === 0 ||
      secondSide === 0 ||
      isNaN(firstSide) ||
      isNaN(secondSide) ||
      firstSide <= 0 ||
      secondSide <= 0
    ) {
      throw "Entredas Inválidas. Digite valores numéricos e positivos";
    }

    answerDiv.classList.remove("hidden-element");
    answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
      firstSide,
      secondSide
    )
      .toFixed(3)
      .replace(/[.,]000$/, "")}
      <div class="left-point"></div>`;
  } catch (error) {
    console.log(error);
  }
}

calculateButton.addEventListener("click", onCalculateButtonClick);
