//Lucas Kode Starter Her
/* Header Menu Kode */
let menuVariable = document.getElementById("menuUL");
let logoFade = document.getElementById("logoFade");

const menuItems = [
    {
        displayName: "Forside",
        link: "Index.html"
    },
    {
        displayName: "Om os",
        link: "about.html"
    },
    {
        displayName: "Frivilligt Arbejde",
        link: "feed.html"
    },
    {
        displayName: "Scoreboard",
        link: "scoreboard.html"
    },   
    {
        displayName: "FAQ",
        link: "faq.html"
    }, 
    {
      displayName: "Kontakt OS",
      link: "Kontakt.html"
    },
    {
        displayName: "Profil",
        link: "profile.html"
    },
    {
      displayName: "Login",
      link: "log%20in.html"
    },
   
];

for(let i = 0; i < menuItems.length; i++){
    menuVariable.innerHTML += "<l>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</l>";
}

let medalText1 = document.getElementById("medalText1");
let medalText2 = document.getElementById("medalText2");
let medalText3 = document.getElementById("medalText3");

function medal1Event() {
  if(medalText1.style.display == "none"){
    medalText1.style.display = "block";
  }
  else{
    medalText1.style.display = "none";
  }
}

function medal2Event() {
  if(medalText2.style.display == "none"){
    medalText2.style.display = "block";
  }
  else{
    medalText2.style.display = "none";
  }
}

function medal3Event() {
  if(medalText3.style.display == "none"){
    medalText3.style.display = "block";
  }
  else{
    medalText3.style.display = "none";
  }
}

//Lucas Kode Slutter Her


//Nikolajs js starter her
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.contact__form button');
  const form = document.getElementById('kontaktForm');

  if (!button || !form) return;

  // send besked
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Din besked er blevet sendt!');
    form.reset();
  });

  
  const originalStyles = {
    backgroundColor: button.style.backgroundColor || '#662483',
    color: button.style.color || '#ffffff'
  };

  // Hover
  button.addEventListener('mouseenter', () => {
    button.style.transition = 'background-color 0.2s ease-out';
    button.style.backgroundColor = '#9d3bc7';
    button.style.color = '#ffffff';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = originalStyles.backgroundColor;
    button.style.color = originalStyles.color;
  });

  // Active 
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = '#ffffff';
    button.style.color = '#9d3bc7';
  });

  
  button.addEventListener('mouseup', () => {
    if (button.matches(':hover')) {
      button.style.backgroundColor = '#9d3bc7';
      button.style.color = '#ffffff';
    } else {
      button.style.backgroundColor = originalStyles.backgroundColor;
      button.style.color = originalStyles.color;
    }
  });

  button.addEventListener('focus', () => {
    button.style.outline = 'none';
  });
});

  
  
  
  // FAQ
  document.addEventListener('DOMContentLoaded', () => {
    // Array
    const faqData = [
      {
        question: "Hvem er Kirkens Korshær?",
        answer: "Vi er en velgørenhedsorganisation, som hjælper folk med at finde et varmt sted at sove og et godt måltid mad. Vi er også ambassadører for genbrug."
      },
      {
        question: "Hvordan tjener jeg point?",
        answer: "Du kan tjene point ved at melde dig frivilligt til en af de mange opgaver på job-siden."
      },
      {
        question: "Chicken?",
        answer: "Jockey!!!"
      }
    ];
  // Loop
    const faqContainer = document.getElementById('faq');
    if (!faqContainer) return;
  
    faqData.forEach(({ question, answer }) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'faq-question';
      questionDiv.textContent = question;
  
      const answerDiv = document.createElement('div');
      answerDiv.className = 'faq-answer';
      answerDiv.textContent = answer;
      answerDiv.style.display = 'none';
  
      questionDiv.addEventListener('click', () => {
        const isVisible = answerDiv.style.display === 'block';
        answerDiv.style.display = isVisible ? 'none' : 'block';
      });
  
      faqContainer.appendChild(questionDiv);
      faqContainer.appendChild(answerDiv);
    });
  });

//nikolajs js slutter her

// Long JS Starter her //
document.addEventListener('DOMContentLoaded', function() {
  // Debugging - viser at scriptet er loaded
  console.log('Script loaded successfully');

  // Variabler og typer
  const heroSlides = document.querySelectorAll('.hero__slide');
  const volunteerSlides = document.querySelectorAll('.volunteer__slide');
  let globalCounter = 0; // Global variabel til demonstration af scope

  // Arrays
  const slideIntervals = [5000, 5000]; // Intervaller for hvert slideshow

  // Objekter
  const slideshows = {
      hero: {
          element: document.querySelector('.hero__slides'),
          slides: heroSlides,
          currentIndex: 0,
          interval: slideIntervals[0]
      },
      volunteer: {
          element: document.querySelector('.volunteer__slides'),
          slides: volunteerSlides,
          currentIndex: 0,
          interval: slideIntervals[1]
      }
  };

  // Funktioner
  function showNextSlide(slideshow) {
      // If-else kontrolstruktur
      if (!slideshow || !slideshow.slides) {
          console.error('Invalid slideshow object');
          return;
      }

      // Operatorer - beregn næste slide med modulus
      slideshow.currentIndex = (slideshow.currentIndex + 1) % slideshow.slides.length;
      
      // DOM manipulation - flyt slideshow
      const translateX = slideshow === slideshows.hero ? 
          -slideshow.currentIndex * 33.333 : 
          -slideshow.currentIndex * 50;
      slideshow.element.style.transform = `translateX(${translateX}%)`;

      // Loop - log status for alle slides
      for (let i = 0; i < slideshow.slides.length; i++) {
          console.log(`Slide ${i}: ${i === slideshow.currentIndex ? 'active' : 'inactive'}`);
      }

      globalCounter++; // Ændrer global variabel
      console.log(`Global counter: ${globalCounter}`);
  }

  // Start slideshows
  function initSlideshows() {
      Object.values(slideshows).forEach(slideshow => {
          setInterval(() => showNextSlide(slideshow), slideshow.interval);
      });
  }

  // Chat funktionalitet
  function setupChat() {
      const chatButton = document.getElementById('liveChatButton');
      const chatModal = document.getElementById('chatModal');
      
      if (!chatButton || !chatModal) return;

      const closeButton = chatModal.querySelector('.chat-modal__close-button');
      const sendButton = chatModal.querySelector('.chat-modal__send-button');
      const messageInput = chatModal.querySelector('.chat-modal__input-field');
      const messagesContainer = chatModal.querySelector('.chat-modal__messages');

      // Event listeners
      chatButton.addEventListener('click', toggleChat);
      closeButton.addEventListener('click', toggleChat);
      sendButton.addEventListener('click', sendMessage);
      messageInput.addEventListener('keypress', e => e.key === 'Enter' && sendMessage());

      function toggleChat() {
          chatModal.style.display = chatModal.style.display === 'flex' ? 'none' : 'flex';
      }

      function sendMessage() {
          const message = messageInput.value.trim();
          
          // If-else med strenglængde check
          if (message.length === 0) {
              alert('Indtast venligst en besked');
              return;
          }
          
          if (message.length > 100) {
              alert('Beskeden er for lang (max 100 tegn)');
              return;
          }

          addMessage('Dig', message, 'user-message');
          messageInput.value = '';
          
          // Simuler svar fra support
          setTimeout(() => {
              const responses = [
                  "Tak for din besked!",
                  "Vi vender tilbage hurtigst muligt.",
                  "Har du brug for yderligere hjælp?"
              ];
              const randomResponse = responses[Math.floor(Math.random() * responses.length)];
              addMessage('Support', randomResponse, 'support-message');
          }, 1000 + Math.random() * 2000);
      }

      function addMessage(sender, text, className) {
          const messageElement = document.createElement('div');
          messageElement.classList.add('message', className);
          messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
          messagesContainer.appendChild(messageElement);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
  }

  // Starter Funktionaliteten for Slideshows og Chat
  initSlideshows();
  setupChat();
});

    // Back Button funktionalitet
    const backButton = document.querySelector('.chat__back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            // While loop eksempel
            let counter = 3;
            while (counter > 0) {
                console.log(`Returnerer tilbage om ${counter} sekunder`);
                counter--;
            }
            window.history.back();
        });
    }
// Long JS slutter her //

// Johannes JS starte her //

// DOM elementer (Variabler og typer)
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Event listener (Events)
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Operatorer (&&)
    if(emailInput.value.trim() === '' || passwordInput.value === '') {
        showError('Begge felter skal udfyldes!');
        return;
    }
    
    // Simpel validering (if-else)
    if(!checkCredentials()) {
        showError('Forkert kode eller brugernavn/email');
    }
});

// Funktioner
function checkCredentials() {
    // Simpel dummy check (skal erstattes med rigtig logik)
    return emailInput.value === 'test@example.com' && passwordInput.value === '1234';
}

function showError(message) {
    // DOM manipulation
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Fjern eksisterende fejl
    const existingError = document.querySelector('.error-message');
    if(existingError) existingError.remove();
    
    // Indsæt efter formularen
    loginForm.parentNode.insertBefore(errorDiv, loginForm.nextSibling);
}

/* JS til feed side */

document.querySelectorAll('.card').forEach(card => {
  // Hover effekt
  card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.03)';
      card.style.boxShadow = '0 8px 16px rgba(104, 35, 124, 0.2)';
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
  });

  // Hjerte-ikon klik
  const heartIcon = card.querySelector('.fa-heart');
  if(heartIcon) {
      heartIcon.addEventListener('click', () => {
          heartIcon.classList.toggle('active');
      });
  }
});

// Sorteringsfunktion
document.querySelector('.sort-btn').addEventListener('click', () => {
  const cardGrid = document.querySelector('.card-grid');
  const cards = Array.from(cardGrid.children);

  // Sorter alfabetisk
  cards.sort((a, b) => {
      const titleA = a.querySelector('h2').textContent.toLowerCase();
      const titleB = b.querySelector('h2').textContent.toLowerCase();
      return titleA.localeCompare(titleB, 'da');
  });

  // Opdater DOM
  cardGrid.innerHTML = ''; // Fjern alle kort
  cards.forEach(card => cardGrid.appendChild(card)); // Tilføj sorterede kort
});

// Johannes JS slutter her //