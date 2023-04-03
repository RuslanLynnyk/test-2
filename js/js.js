
(function() {
      window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

const tabLink = document.querySelectorAll('.nav-link');


tabLink.forEach(tabLink => {
  tabLink.addEventListener('click', event => {
    // перевіряємо, чи елемент активний
    if (!tabLink.classList.contains('active')) {
      // вимикаємо всі активні таби
      document.querySelectorAll('.nav-link.active').forEach(activeTab => {
        activeTab.classList.remove('active');
      });

      // отримуємо ідентифікатор контенту таба, на який клікнули
      const targetTabId = tabLink.dataset.tabTarget;

      // вимикаємо всі активні вмістові таби
      document.querySelectorAll('.tab-pane.active').forEach(activeContent => {
        activeContent.classList.remove('active');
      });

      // вмикаємо вмістовий таб, який відповідає елементу меню, на який клікнули
      document.querySelector(targetTabId).classList.add('active');

      // активуємо поточний елемент меню табів
      tabLink.classList.add('active');
    }

    // запобігаємо стандартній поведінці браузера при кліку на посилання
      event.preventDefault();
  });
});

const continueButton = document.getElementById('continue-button');

continueButton.addEventListener('click', () => {
  const billingInfoTab = document.getElementById('quality-tab');
  billingInfoTab.classList.add('active');
  const billingInfoTab1 = document.getElementById('price-tab');
  billingInfoTab1.classList.add('active');
  // якщо потрібно зняти active з попереднього таба
  const contactInfoTab = document.getElementById('contact-info-tab');
  contactInfoTab.classList.remove('active');
});

const quantityInput = document.getElementById("quantity");
  const priceOutput = document.getElementById("price");

  function calculatePrice() {
    const quantity = parseInt(quantityInput.value);
    let price = 0;

    if (quantity >= 1 && quantity <= 10) {
      price = 10;
    } else if (quantity >= 11 && quantity <= 100) {
      price = 100;
    } else if (quantity >= 101 && quantity <= 1000) {
      price = 1000;
    }

    priceOutput.innerText = "$" + price;
  }

  function sendEmail() {
  }

  function goBack() {
  }

 quantityInput.addEventListener("input", calculatePrice)
const tabs = Array.from(document.querySelectorAll('.tab-pane'));


const nextButton = document.querySelector('#continue-button');
const backButton = document.querySelector('#back-button');


nextButton.addEventListener('click', () => {

  const currentTab = tabs.find(tab => tab.classList.contains('active'));

  currentTab.classList.remove('active');

  const nextTab = currentTab.nextElementSibling;


  nextTab.classList.add('active');
});


backButton.addEventListener('click', () => {
  const currentTab = tabs.find(tab => tab.classList.contains('active'));

  currentTab.classList.remove('active');

  const prevTab = currentTab.previousElementSibling;

  prevTab.classList.add('active');
});
