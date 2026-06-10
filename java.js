function alternarTema() {
        document.body.classList.toggle("claro");
        const tema = document.body.classList.contains("claro") ? "claro" : "escuro";
        localStorage.setItem("temaRauli", tema);
      }

      
      window.onload = () => {
        const temaSalvo = localStorage.getItem("temaRauli");
        if (temaSalvo === "claro") {
          document.body.classList.add("claro");
        }
      };

      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section);
      });

      // 3. Efeito Simples de Digitação (Substitui o script externo para este exemplo)
      const textElement = document.getElementById('typed');
      const phrases = ["Interesse em Jogos", "Desenvolvedor FrontEnd", "Programador"];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          textElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        } else {
          textElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, 2000); 
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, isDeleting ? 50 : 100); 
        }
      }

      type(); 

      
      document.querySelectorAll('.nav-card, .modern-item').forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
        });
      });
