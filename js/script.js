//Lucas Kode Starter Her
/* Header Menu Kode */
let menuVariable = document.getElementById("menuUL");
let logoFade = document.getElementById("logoFade");

const menuItems = [
    {
        displayName: "Forside",
        link: "projekt4forside.html"
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
//hey lukas noget af din kode herunder fucker med faq siden.
let medalText1 = document.getElementById("medalText1");
let medalText2 = document.getElementById("medalText2");
let medalText3 = document.getElementById("medalText3");

medalText1.style.display = "none";
medalText2.style.display = "none";
medalText3.style.display = "none";

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
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.contact__form button');
    const form = document.getElementById('kontaktForm');
  
    if (!button) return;
  
    // send form event
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Din besked er blevet sendt!');
      });
    }
  
    // Hover
    button.addEventListener('mouseenter', function () {
      button.style.transition = 'background-color 0.2s ease-out';
      button.style.backgroundColor = '#9d3bc7';
      button.style.color = '#ffffff';
    });
  
    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = '#662483';
      button.style.color = '#ffffff';
    });
  
    // Active
    button.addEventListener('mousedown', function () {
      button.style.backgroundColor = '#ffffff';
      button.style.color = '#9d3bc7';
    });
  
    button.addEventListener('mouseup', function () {
      if (button.matches(':hover')) {
        button.style.backgroundColor = '#9d3bc7';
        button.style.color = '#ffffff';
      } else {
        button.style.backgroundColor = '#662483';
        button.style.color = '#ffffff';
      }
    });
  
    button.addEventListener('focus', function () {
      button.style.outline = 'none';
    });
  });
  
  
  
  // FAQ
  document.addEventListener("DOMContentLoaded", function () {
    // Array
    const faqData = [
      {
        question: "Hvem er Kirkens Korshær?",
        answer: "vi er en velgørenheds organisation som hjælpe folk med at finde et varmt sted at sove og en god omgang mad, samt er vi ambassadøre for genbrug."
      },
      {
        question: "hvordan tjener jeg points?",
        answer: "du kan tjene points ved at mælde dig friviligt til en af de mange opgaver på job siden."
      },
      {
        question: "chicken?",
        answer: "Jockey!!!"
      }
    ];
  
    const faqContainer = document.getElementById("faq");
    if (!faqContainer) return; 
  
    // Loop
    for (let i = 0; i < faqData.length; i++) {
      const item = faqData[i];
  
      const questionDiv = document.createElement("div");
      questionDiv.className = "faq-question";
      questionDiv.textContent = item.question;
  
      const answerDiv = document.createElement("div");
      answerDiv.className = "faq-answer";
      answerDiv.textContent = item.answer;
  
      questionDiv.addEventListener("click", function () {
        if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
          answerDiv.style.display = "block";
        } else {
          answerDiv.style.display = "none";
        }
      });
  
      faqContainer.appendChild(questionDiv);
      faqContainer.appendChild(answerDiv);
    }
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
// Long JS slutter her //