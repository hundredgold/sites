const dialog = document.querySelector('#estimate');
const input = document.querySelector('#estimate-input');
const form = document.querySelector('#estimate-form');
const result = document.querySelector('#estimate-result');
const resultTitle = document.querySelector('#result-title');
const selectedProject = document.querySelector('#selected-project');
const receiptProject = document.querySelector('#receipt-project');
const receiptRegion = document.querySelector('#receipt-region');

for (const button of document.querySelectorAll('[data-project]')) {
  button.addEventListener('click', () => {
    form.reset();
    result.hidden = true;
    input.hidden = false;
    selectedProject.textContent = button.dataset.project;
    dialog.setAttribute('aria-labelledby', 'estimate-title');
    dialog.showModal();
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = new FormData(form);
  receiptProject.textContent = selectedProject.textContent;
  receiptRegion.textContent = values.get('region');
  input.hidden = true;
  result.hidden = false;
  dialog.setAttribute('aria-labelledby', 'result-title');
  resultTitle.focus();
});

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('#finish').addEventListener('click', () => dialog.close());
