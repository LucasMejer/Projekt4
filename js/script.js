//Lucas Kode Starter Her
/* Header Menu Kode */
let menuVariable = document.getElementById("menuUL");
let logoFade = document.getElementById("logoFade");

const menuItems = [
    {
        displayName: "Forside",
        link: "Indsæt html her"
    },
    {
        displayName: "Profil",
        link: "Indsæt html her"
    },
    {
        displayName: "Jobs",
        link: "Indsæt html her"
    },
    {
        displayName: "Leaderboards",
        link: "Indsæt html her"
    },    
    {
        displayName: "Kontakt os",
        link: "Indsæt html her"
    },
];

for(let i = 0; i < menuItems.length; i++){
    menuVariable.innerHTML += "<l>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</l>";
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