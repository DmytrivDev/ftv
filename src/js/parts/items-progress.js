function handleStepChange(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const dataId = button.dataset.id;

  const targetStep = document.getElementById(dataId);
  const currentStep = document.querySelector('.choose-card');

  if (currentStep && targetStep) {
    currentStep.classList.remove('choose-card');

    document.querySelectorAll('.services__btn').forEach(btn => {
      btn.classList.remove('choose-btn');
    });

    targetStep.classList.add('choose-card');
    button.classList.add('choose-btn');

    setTimeout(() => {
      currentStep.classList.remove('is-transition');
      targetStep.classList.add('is-transition');
    }, 10);
  }
}

document.querySelectorAll('.services__btn').forEach(button => {
  button.addEventListener('click', handleStepChange);
});
